import { useEffect, useRef, useState } from "react";
import { PROFILE, PROJECTS, SKILLS, CERTIFICATIONS } from "@/lib/portfolio-data";

type Line = { kind: "cmd" | "out"; text: string };

const PROMPT = "pranjal@kathmandu:~$";

const BANNER = [
  "PP-TERM v2.1 — interactive portfolio shell",
  "Type 'help' to list available commands.",
];

function runCommand(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "":
      return [];
    case "help":
      return [
        "Available commands:",
        "  whoami        who is Pranjal Panta",
        "  skills        core skills & tools",
        "  projects      featured projects",
        "  certs         certifications",
        "  contact       contact information",
        "  ping          test the link",
        "  nmap          scan this host",
        "  clear         clear the terminal",
      ];
    case "whoami":
      return [
        `${PROFILE.name} — ${PROFILE.tagline}`,
        PROFILE.location,
        "",
        PROFILE.about,
      ];
    case "skills":
      return SKILLS.flatMap((s) => [
        `[${s.title}]`,
        ...s.blocks.map((b) => `  ${b.label}: ${b.tags.join(", ")}`),
        "",
      ]).slice(0, -1);
    case "projects":
      return PROJECTS.flatMap((p, i) => [`${String(i + 1).padStart(2, "0")}. ${p.title}`, `    ${p.desc}`]);
    case "certs":
      return CERTIFICATIONS.map((c) => `• ${c.name} — ${c.issuer} (${c.date})`);
    case "contact":
      return [
        `Email     ${PROFILE.email}`,
        `Phone     ${PROFILE.phone}`,
        `GitHub    ${PROFILE.github}`,
        `LinkedIn  ${PROFILE.linkedin}`,
        `Medium    ${PROFILE.medium}`,
      ];
    case "ping":
      return [
        `PING portfolio (${PROFILE.location}) 56(84) bytes of data.`,
        "64 bytes from pranjal: icmp_seq=1 ttl=64 time=0.042 ms",
        "64 bytes from pranjal: icmp_seq=2 ttl=64 time=0.038 ms",
        "",
        "--- portfolio ping statistics ---",
        "2 packets transmitted, 2 received, 0% packet loss",
      ];
    case "nmap":
      return [
        "Starting Nmap 7.94 ( https://nmap.org )",
        "Nmap scan report for pranjal-panta (127.0.0.1)",
        "Host is up (0.00012s latency).",
        "PORT     STATE  SERVICE",
        "22/tcp   open   ssh",
        "443/tcp  open   https",
        "1337/tcp open   curiosity",
        "",
        "Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds",
      ];
    case "sudo":
      return ["Nice try. This incident will be reported. 🔒"];
    default:
      return [`command not found: ${cmd}. Type 'help'.`];
  }
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(BANNER.map((text) => ({ kind: "out", text })));
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = () => {
    const raw = value;
    const out: Line[] = [{ kind: "cmd", text: raw }];
    if (raw.trim().toLowerCase() === "clear") {
      setLines([]);
    } else {
      out.push(...runCommand(raw).map((text) => ({ kind: "out" as const, text })));
      setLines((l) => [...l, ...out]);
    }
    if (raw.trim()) {
      setHistory((h) => [...h, raw]);
    }
    setHistIdx(-1);
    setValue("");
  };

  return (
    <div
      className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-destructive" />
        <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">pranjal@kathmandu: ~</span>
      </div>
      {/* Body */}
      <div ref={bodyRef} className="h-80 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed">
        {lines.map((l, i) =>
          l.kind === "cmd" ? (
            <div key={i} className="whitespace-pre-wrap">
              <span className="text-primary">{PROMPT}</span> <span className="text-foreground">{l.text}</span>
            </div>
          ) : (
            <div key={i} className="whitespace-pre-wrap text-muted-foreground">
              {l.text}
            </div>
          ),
        )}
        <div className="mt-1 flex items-center gap-2">
          <span className="shrink-0 text-primary">{PROMPT}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
              else if (e.key === "ArrowUp") {
                e.preventDefault();
                const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
                const entry = history[idx];
                if (entry !== undefined) {
                  setHistIdx(idx);
                  setValue(entry);
                }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const next = history[histIdx + 1];
                if (histIdx >= 0 && next !== undefined) {
                  setHistIdx(histIdx + 1);
                  setValue(next);
                } else {
                  setHistIdx(-1);
                  setValue("");
                }
              }
            }}
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
            placeholder="type 'help'…"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
