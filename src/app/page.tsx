import Image from "next/image";
import { profile } from "@/data/profile";
import EmailCopyButton from "@/components/EmailCopyButton";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h2>
      <div className="text-zinc-700">{children}</div>
    </section>
  );
}

export default function Home() {
  const { contact } = profile;
  const email = contact.email?.trim();
  const links = [
    { label: "GitHub", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
  ].filter((l) => Boolean(l.href?.trim()));

  return (
    <div className="min-h-full bg-white text-zinc-900">
      <div className="mx-auto flex min-h-full max-w-3xl flex-col px-6 py-14 sm:py-20">
        <header className="mb-16 flex flex-col gap-10 sm:mb-20 sm:flex-row sm:items-start sm:gap-12">
          <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-sm sm:h-52 sm:w-52 sm:mx-0">
            <Image
              src={profile.imageSrc}
              alt={profile.imageAlt}
              fill
              sizes="(max-width: 640px) 176px, 200px"
              quality={75}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="mb-2 text-sm font-medium text-cyan-600">
              {profile.role}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 text-justify">
              {profile.tagline}
            </p>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-14 sm:gap-16">
          <Section id="about" title="About">
            <p className="leading-relaxed text-justify">{profile.about}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 text-justify">
              {profile.learning}
            </p>
          </Section>

          <Section id="skills" title="Skills & tech stack">
            <dl className="space-y-6">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category}>
                  <dt className="mb-2 text-sm font-medium text-zinc-900">
                    {category}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <li key={item}>
                          <span className="inline-block rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-sm text-zinc-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="projects" title="Projects">
            <p className="leading-relaxed text-justify">{profile.projectsSummary}</p>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div
                  key={`${edu.school}-${idx}`}
                  className="rounded-xl border border-zinc-200/80 bg-white p-4"
                >
                  <p className="text-sm font-semibold text-zinc-900">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-zinc-600">{edu.school}</p>
                  <p className="text-xs font-medium text-zinc-500">
                    {edu.timeframe}
                  </p>
                  {edu.details ? (
                    <p className="mt-2 text-sm text-zinc-600">{edu.details}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            {links.length > 0 || email ? (
              <ul className="flex flex-wrap gap-3">
                {email ? (
                  <li>
                    <EmailCopyButton email={email} />
                  </li>
                ) : null}
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex items-center rounded-lg border border-cyan-600/30 bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-600/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-600">
                Add your GitHub, LinkedIn, and email in{" "}
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs">
                  src/data/profile.ts
                </code>
                .
              </p>
            )}
          </Section>
        </main>

        <footer className="mt-20 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </div>
  );
}
