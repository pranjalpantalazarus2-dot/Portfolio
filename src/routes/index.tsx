import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Network,
  Shield,
  GraduationCap,
  FolderGit2,
  BadgeCheck,
  PenLine,
  TerminalSquare,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Github,
  Linkedin,
  Microscope,
  ExternalLink,
  Download,
  MessageCircle,
} from "lucide-react";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { Terminal } from "@/components/Terminal";
import { PROFILE, SKILLS, EDUCATION, PROJECTS, CERTIFICATIONS, BLOGS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranjal Panta | Network Engineer & Cybersecurity" },
      {
        name: "description",
        content:
          "Portfolio of Pranjal Panta — Network Engineer & Cybersecurity enthusiast in Kathmandu, Nepal. Networking, certifications, projects and research.",
      },
      { property: "og:title", content: "Pranjal Panta | Network Engineer & Cybersecurity" },
      {
        property: "og:description",
        content: "Networking, Cybersecurity, Certifications & Projects — Pranjal Panta, Kathmandu, Nepal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["blogs", "Blogs"],
  ["terminal", "Terminal"],
  ["contact", "Contact"],
] as const;

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-8">
      <span className="font-mono text-xs text-primary">~/{id}</span>
      <h2 id={id} className="mt-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        <span className="mr-2 font-mono text-primary">$</span>
        {children}
      </h2>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="scroll-mt-24 border-t border-border py-16">
      {children}
    </section>
  );
}

function useTyped(text: string, startDelay = 400) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, 40);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, startDelay]);
  return out;
}

function Hero() {
  const typed = useTyped(PROFILE.tagline);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <header className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden text-center">
      <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 px-4">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-lg border border-primary/40 bg-card font-mono text-2xl font-bold text-primary shadow-[0_0_40px_-8px_var(--color-primary)]">
          {PROFILE.initials}
        </div>

        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          // connection established — 0% packet loss
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Hi, I'm <span className="text-primary">{PROFILE.name}</span>
        </h1>
        <p className="mt-4 h-6 font-mono text-sm text-muted-foreground md:text-base">
          {typed}
          <span className="caret-blink text-primary">▌</span>
        </p>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" /> {PROFILE.location}
          <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-[11px] text-primary">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            open to work
          </span>
        </p>

        <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy email"}
          </button>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={PROFILE.viber}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> Viber
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-muted-foreground">
          {[
            { href: PROFILE.github, icon: Github, label: "GitHub" },
            { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: PROFILE.medium, icon: PenLine, label: "Medium" },
            { href: PROFILE.researchgate, icon: Microscope, label: "ResearchGate" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div className="relative z-10 min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/40 bg-card font-bold text-primary">
              P
            </span>
            <span className="hidden text-muted-foreground sm:inline">~/pranjal-panta</span>
          </a>
          <div className="hidden items-center gap-5 font-mono text-xs text-muted-foreground lg:flex">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-primary">
                {label.toLowerCase()}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-1.5 font-mono text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            hire_me
          </a>
        </div>
      </nav>

      <Hero />

      <main className="mx-auto max-w-5xl px-4">
        {/* ABOUT */}
        <Section id="about">
          <SectionHeading id="about">whoami</SectionHeading>
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="leading-relaxed text-muted-foreground">{PROFILE.about}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs md:grid-cols-4">
              {[
                ["11+", "certifications"],
                ["6", "projects"],
                ["3", "publications"],
                ["∞", "curiosity"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-md border border-border bg-background p-3 text-center">
                  <div className="text-xl font-bold text-primary">{n}</div>
                  <div className="mt-1 text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <SectionHeading id="skills">core skills & tools</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS.map((group) => (
              <div key={group.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 font-semibold text-foreground">
                  {group.title === "Networking" ? (
                    <Network className="h-4 w-4 text-primary" />
                  ) : (
                    <Shield className="h-4 w-4 text-primary" />
                  )}
                  {group.title}
                </h3>
                {group.blocks.map((block) => (
                  <div key={block.label} className="mt-5">
                    <h4 className="font-mono text-xs text-muted-foreground">{block.label}</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {block.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <SectionHeading id="education">education</SectionHeading>
          <div className="space-y-4">
            {EDUCATION.map((e) => (
              <div
                key={e.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
              >
                <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <SectionHeading id="projects">featured projects</SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    prj_{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  {...(p.link.download ? { download: true } : {})}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary hover:underline"
                >
                  {p.link.download ? <Download className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                  {p.link.label}
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications">
          <SectionHeading id="certifications">certifications</SectionHeading>
          <div className="overflow-hidden rounded-lg border border-border">
            {CERTIFICATIONS.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 border-b border-border bg-card p-4 transition-colors last:border-b-0 hover:bg-accent"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{c.name}</div>
                    <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </div>
                  </div>
                </div>
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </Section>

        {/* BLOGS */}
        <Section id="blogs">
          <SectionHeading id="blogs">medium blogs</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {BLOGS.map((b) => (
              <a
                key={b.title}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <PenLine className="h-4 w-4 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-primary">
                  read on medium <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* TERMINAL */}
        <Section id="terminal">
          <SectionHeading id="terminal">interactive terminal</SectionHeading>
          <p className="mb-4 text-sm text-muted-foreground">
            A small shell into this portfolio. Try <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">help</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">whoami</code> or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">nmap</code>.
          </p>
          <Terminal />
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <SectionHeading id="contact">contact</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <TerminalSquare className="h-5 w-5 text-primary" /> Let's build something secure
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Open to networking and cybersecurity roles, internships and collaboration on labs or
                research. Fastest reply via email or WhatsApp.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> {PROFILE.email}
                </a>
                <a
                  href="tel:+9779861490158"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" /> {PROFILE.phone}
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {PROFILE.location}
                </div>
              </div>
            </div>
            <form
              className="rounded-lg border border-border bg-card p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Portfolio contact — ${data.get("topic")}`);
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("sender")}\n\n${data.get("message")}`,
                );
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                />
                <input
                  name="sender"
                  type="email"
                  required
                  placeholder="Your email"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                />
              </div>
              <select
                name="topic"
                className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/60"
                defaultValue="Job opportunity"
              >
                <option>Job opportunity</option>
                <option>Internship</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="mt-3 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <button
                type="submit"
                className="mt-4 rounded-md bg-primary px-6 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                send --secure
              </button>
            </form>
          </div>
        </Section>
      </main>

      {/* ============ FOOTER — bold closing statement ============ */}
      <footer className="relative overflow-hidden border-t border-border">
        {/* Oversized statement */}
        <div className="border-b border-border px-4 pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              <span className="text-primary">$</span> ./end_of_transmission — but the start of a conversation
            </p>
            <h2 className="text-[13vw] leading-[0.9] font-bold tracking-tighter text-foreground uppercase select-none md:text-[7.5rem] lg:text-[9rem]">
              Ping<span className="text-primary">.</span> Path<span className="text-primary">.</span>
              <br />
              <span className="text-ember">Protect</span>
              <span className="caret-blink text-primary">_</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Every packet tells a story. I make sure it reaches the right destination — and no one
              reads it along the way.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Start a project
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(PROFILE.email).catch(() => {})}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-ember/60 hover:text-ember"
              >
                <Copy className="h-4 w-4" /> {PROFILE.email}
              </button>
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">// contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-ember">
                  <Mail className="h-3.5 w-3.5 text-ember" /> {PROFILE.email}
                </a>
              </li>
              <li>
                <a href="tel:+9779861490158" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-ember">
                  <Phone className="h-3.5 w-3.5 text-ember" /> {PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-ember" /> {PROFILE.location}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">// navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 font-mono text-xs">
              {NAV.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">
                    <span className="text-primary/60">&gt;</span> {label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">// elsewhere</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: PROFILE.github, icon: Github, label: "GitHub" },
                { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: PROFILE.medium, icon: PenLine, label: "Medium" },
                { href: PROFILE.researchgate, icon: Microscope, label: "ResearchGate" },
              ].map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                    <Icon className="h-3.5 w-3.5 text-primary" /> {label}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">// status</h3>
            <div className="mt-4 rounded-md border border-border bg-card p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <div><span className="text-primary">uptime</span> ....... always</div>
              <div><span className="text-primary">latency</span> ....... low</div>
              <div><span className="text-primary">packet_loss</span> ... 0%</div>
              <div className="mt-2 flex items-center gap-1.5 text-ember">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ember" /> open to work
              </div>
            </div>
          </div>
        </div>

        {/* Giant watermark + bottom bar */}
        <div className="relative border-t border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-6 overflow-hidden text-center text-[18vw] leading-none font-bold tracking-tighter whitespace-nowrap text-foreground/[0.03] uppercase select-none"
          >
            pranjal
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 font-mono text-[11px] text-muted-foreground sm:flex-row">
            <p>
              <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Pranjal Panta — Kathmandu, Nepal"
            </p>
            <p className="text-muted-foreground/70">
              designed in the terminal <span className="text-ember">·</span> built with 0% packet loss
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
