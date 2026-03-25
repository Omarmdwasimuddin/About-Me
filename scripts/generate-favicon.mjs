import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const repoRoot = path.resolve(process.cwd());
const inputPath = path.join(
  repoRoot,
  "public",
  "profile-img",
  "Wasim-ai.png"
);
const outputPath = path.join(repoRoot, "public", "favicon.ico");

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(inputPath))) {
  throw new Error(
    `Missing input image: ${inputPath}. Add Wasim-ai.png under public/profile-img/.`
  );
}

const iconSize = 64;

// Many libraries don't support writing ICO directly, but ICO can legally embed a
// PNG image. We generate a 64x64 PNG buffer and wrap it in a minimal ICO container.
const pngBuffer = await sharp(inputPath)
  .resize(iconSize, iconSize, { fit: "cover" })
  .png()
  .toBuffer();

const pngSize = pngBuffer.length;

// ICO file format (ICONDIR + ICONDIRENTRY + image data)
// ICONDIR: 6 bytes
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: 1 = icon
header.writeUInt16LE(1, 4); // count: 1 image

// ICONDIRENTRY: 16 bytes
// width/height are 1 byte each; height field is often described as doubled for AND mask
// for bitmap icons, but PNG-in-ICO works with the actual size for modern browsers.
const entry = Buffer.alloc(16);
entry.writeUInt8(iconSize, 0); // width
entry.writeUInt8(iconSize, 1); // height
entry.writeUInt8(0, 2); // color count (0 for >= 8bpp / PNG)
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6); // bit count
entry.writeUInt32LE(pngSize, 8); // bytes in resource
entry.writeUInt32LE(6 + 16, 12); // image offset (after header+entry)

const icoBuffer = Buffer.concat([header, entry, pngBuffer]);
await fs.writeFile(outputPath, icoBuffer);

console.log(`Generated ${outputPath} (${iconSize}x${iconSize} PNG embedded)`);

