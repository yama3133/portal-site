import { profile, socials } from "@/data/site";
import { socialIcons, ArrowIcon, CloudIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <Background />
      <main className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <Hero />
        <Links />
        <Footer />
      </main>
    </div>
  );
}

function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-blob absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/30 blur-3xl" />
      <div className="animate-blob absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/25 blur-3xl [animation-delay:-7s]" />
      <div className="animate-blob absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-14s]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#07070d_75%)]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="fade-up flex flex-col items-center text-center">
      <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-sm text-zinc-400">{profile.nameEn}</p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">
          {profile.title}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
          <CloudIcon className="h-3.5 w-3.5" />
          {profile.badge}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-400">
          {profile.location}
        </span>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

function Links() {
  return (
    <section className="fade-up mt-20 [animation-delay:120ms]">
      <SectionTitle eyebrow="Connect" title="リンク" />
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.gradient} opacity-0 transition duration-300 group-hover:opacity-10`}
              />
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{s.label}</h3>
                  {s.handle && (
                    <p className="truncate font-mono text-xs text-zinc-500">
                      {s.handle}
                    </p>
                  )}
                </div>
                <ArrowIcon className="h-5 w-5 shrink-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 pt-8 text-center">
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.nameEn}
      </p>
      <p className="mt-1 font-mono text-xs text-zinc-600">
        Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  );
}
