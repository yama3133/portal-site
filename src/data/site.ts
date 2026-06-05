// =============================================================
//  サイトの内容はこのファイルだけ編集すれば差し替えできます。
// =============================================================

export type IconName =
  | "github"
  | "linkedin"
  | "x"
  | "blog"
  | "mail"
  | "credly";

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
  icon: IconName;
  /** ホバー時のアクセントに使う Tailwind グラデーション */
  gradient: string;
};

export const profile = {
  name: "山下 祐樹",
  nameEn: "Yuuki Yamashita",
  initials: "YY",
  title: "AI Engineer",
  badge: "AWS Community Builder · AI Engineering",
  credlyUrl: "https://www.credly.com/users/yuuki-yamashita.1640e455",
  location: "Tokyo, Japan",
  // 画面では非表示。検索向けの説明文（OGP / meta description）として使用
  tagline: "生成 AI とサーバーレスで、アイデアを動くプロダクトに。",
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/yama3133",
    handle: "@yama3133",
    icon: "github",
    gradient: "from-zinc-400 to-zinc-600",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yama3133",
    handle: "in/yama3133",
    icon: "linkedin",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/111330118y_y",
    handle: "@111330118y_y",
    icon: "x",
    gradient: "from-zinc-300 to-zinc-500",
  },
  {
    label: "Qiita",
    href: "https://qiita.com/yama3133",
    handle: "@yama3133",
    icon: "blog",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    label: "DEV.to",
    href: "https://dev.to/_76130e67067eab4c8510",
    icon: "blog",
    gradient: "from-zinc-200 to-zinc-500",
  },
  {
    label: "Credly",
    href: "https://www.credly.com/users/yuuki-yamashita.1640e455",
    handle: "AWS Community Builder",
    icon: "credly",
    gradient: "from-amber-400 to-orange-500",
  },
];

// 雑誌表紙のコピー（現ポータルの内容から生成）
export const cover = {
  issue: "ISSUE 01",
  edition: "THE BUILDER'S EDITION",
  date: "SPRING 2026",
  place: "TOKYO",
  micro: ["PREMIUM EDITION", "No. 01", "FOR BUILDERS & DREAMERS"],
  headline: {
    kicker: "COVER STORY",
    title: "THE AI FRONTIER",
    sub: "生成 AI とサーバーレスで、アイデアを動かす。",
  },
  features: [
    {
      title: "AWS COMMUNITY BUILDER",
      sub: "東京から世界へ。クラウドの最前線を走る。",
    },
    { title: "SERVERLESS STYLE", sub: "軽やかに、速く、美しく作る技術。" },
    { title: "EXCLUSIVE INTERVIEW", sub: "山下祐樹のものづくり論。" },
    { title: "PROTOTYPE TO PRODUCT", sub: "個人開発という名の冒険。" },
    { title: "HACKATHON DIARIES", sub: "48時間の美学。" },
  ],
};
