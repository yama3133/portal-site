import Image from "next/image";
import { profile, socials, cover, type SocialLink } from "@/data/site";
import { socialIcons, ArrowIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="relative">
      <Cover />
      <main className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8">
        <Links />
        <Footer />
      </main>
    </div>
  );
}

function Cover() {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center bg-[#100d0a] p-3 sm:p-6">
      <div className="relative aspect-[3/4] w-full max-w-[70.5vh] overflow-hidden bg-white text-[#1a1512] shadow-[0_40px_120px_rgba(0,0,0,0.6)] [container-type:size]">
        <div className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-[4cqw] pt-[3.5cqw] font-mono text-[2.1cqw] uppercase tracking-[0.18em]">
          <div className="space-y-[0.4cqw]">
            <p className="font-semibold">{cover.issue}</p>
            <p className="text-[#1a1512]/55">{cover.date}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{cover.place}</p>
            <p className="text-[#1a1512]/55">{profile.title}</p>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[10cqw] z-30 text-center">
          <p className="font-mono text-[2.1cqw] font-bold uppercase tracking-[0.28em] text-[#8a2f2a]">
            {cover.headline.kicker} — {cover.headline.title}
          </p>
        </div>

        <h1 className="pointer-events-none absolute inset-x-[2cqw] top-[15cqw] z-20 text-center font-serif text-[15cqw] font-black leading-[0.85] tracking-[-0.02em] text-[#1a1512]">
          Yuuki<br />Yamashita
        </h1>

        <div className="pointer-events-none absolute left-1/2 bottom-[8cqw] z-10 aspect-[896/1195] h-[68%] -translate-x-1/2">
          <Image
            src="/portrait.png"
            alt={profile.nameEn}
            fill
            priority
            sizes="640px"
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(26,21,18,0.2)]"
          />
        </div>

        <div className="absolute right-[4cqw] top-[42%] z-30 flex max-w-[26%] flex-col items-end gap-[3cqw] text-right">
          {socials.slice(0, 3).map((s, i) => (
            <CoverLink key={s.label} s={s} index={i + 1} />
          ))}
        </div>

        <div className="absolute left-[4cqw] top-[42%] z-30 flex max-w-[26%] flex-col items-start gap-[3cqw]">
          {socials.slice(3, 6).map((s, i) => (
            <CoverLink key={s.label} s={s} index={i + 4} />
          ))}
        </div>

        <div className="absolute inset-x-[4cqw] bottom-[3cqw] z-30 flex items-end justify-between font-mono text-[2cqw] uppercase tracking-[0.18em] text-[#1a1512]/70">
          <p className="max-w-[48%] leading-relaxed">{cover.edition}</p>
          <div className="flex h-[6cqw] items-end gap-[0.5cqw]">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="block w-[0.4cqw] bg-[#1a1512]"
                style={{ height: `${35 + ((i * 17) % 60)}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverLink({ s, index }: { s: SocialLink; index: number }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <p className="font-mono text-[1.8cqw] font-bold uppercase tracking-[0.25em] text-[#8a2f2a]">
        {String(index).padStart(2, "0")}
      </p>
      <p className="font-serif text-[4.4cqw] font-bold leading-[1.02] underline-offset-[0.4cqw] transition group-hover:text-[#8a2f2a] group-hover:underline">
        {s.label}
      </p>
      <p className="font-mono text-[1.7cqw] text-[#1a1512]/55">
        {s.handle ?? "READ MORE"}
      </p>
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8a2f2a]">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-serif text-3xl font-bold text-[#1a1512]">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-[#1a1512]/25 to-transparent" />
    </div>
  );
}

function Links() {
  return (
    <section className="fade-up pt-16">
      <SectionTitle eyebrow="Index" title="リンク" />
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#1a1512]/12 bg-[#fbf8f1]/70 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#1a1512]/25 hover:bg-[#fbf8f1]"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.gradient} opacity-0 transition duration-300 group-hover:opacity-10`}
              />
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[#1a1512]">{s.label}</h3>
                  {s.handle && (
                    <p className="truncate font-mono text-xs text-[#1a1512]/50">
                      {s.handle}
                    </p>
                  )}
                </div>
                <ArrowIcon className="h-5 w-5 shrink-0 text-[#1a1512]/30 transition group-hover:translate-x-0.5 group-hover:text-[#1a1512]" />
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
    <footer className="mt-16 border-t border-[#1a1512]/15 pt-8 text-center">
      <p className="text-sm text-[#1a1512]/60">
        © {new Date().getFullYear()} {profile.nameEn}
      </p>
      <p className="mt-1 font-mono text-xs text-[#1a1512]/40">
        Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  );
}
