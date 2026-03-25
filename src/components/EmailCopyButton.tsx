"use client";

import { useCallback, useState } from "react";

export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // If copy fails, do nothing (no navigation should happen anyway).
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center rounded-lg border border-cyan-600/30 bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-600/20"
    >
      {copied ? "Email Copied" : "Email"}
    </button>
  );
}

