import Image from "next/image";
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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07070d]"
    >
      {/* 桜の写真（上部フルブリード） */}
      <div className="absolute inset-x-0 top-0 h-[72vh]">
        <Image
          src="/sakura.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* 文字の可読性を確保するオーバーレイ */}
        <div className="absolute inset-0 bg-[#07070d]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/10 via-[#07070d]/35 to-[#07070d]" />
      </div>
      {/* 下部に控えめなアクセント光 */}
      <div className="animate-blob absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <section className="fade-up flex flex-col items-center text-center">
      <a
        href={profile.credlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AWS Community Builder バッジ（Credly）"
        title="Credly でバッジを表示"
        className="group animate-float mb-7 inline-block"
      >
        <Image
          src="/cb-badge.png"
          alt="AWS Community Builder"
          width={96}
          height={96}
          priority
          className="h-24 w-24 rounded-2xl shadow-2xl ring-1 ring-white/15 transition duration-300 group-hover:scale-105"
        />
      </a>

      <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-sm text-zinc-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
        {profile.nameEn}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-sm font-medium text-zinc-100 backdrop-blur-sm">
          {profile.title}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-sm font-medium text-amber-100 backdrop-blur-sm">
          <CloudIcon className="h-3.5 w-3.5" />
          {profile.badge}
        </span>
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-sm font-medium text-zinc-200 backdrop-blur-sm">
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
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 text-zinc-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-black/50 hover:text-white"
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
