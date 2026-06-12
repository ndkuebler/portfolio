export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags: string[];
  year: string;
  /** File in /public/work (served as /work/...) */
  image: string;
  /** Optional autoplay loop for the card thumbnail. Uses `image` as poster. */
  video?: string;
};

export const works: WorkProject[] = [
  {
    slug: "somni",
    number: "01",
    title: "Somni",
    subtitle: "Stanford Capstone",
    description:
      "A bedside dream journaling device that listens for your alarm, records your dream the moment you wake, and analyzes it with AI.",
    tags: ["Capstone", "Hardware", "Full-Stack"],
    year: "2026",
    image: "/work/somni-hero.jpg",
  },
  {
    slug: "air-dj",
    number: "02",
    title: "Air DJ",
    description:
      "A gesture-controlled DJ board that replaces every knob and fader with a hand motion tracked through a webcam.",
    tags: ["Computer Vision", "ML", "Claude Code"],
    year: "2026",
    image: "/work/airdj-hero-card.jpg",
  },
  {
    slug: "stanford-dorm-apparel",
    number: "03",
    title: "Stanford Dorm Apparel",
    description:
      "A zip-up hoodie designed for the residents of Norcliffe and Adelfa, distributed to all 157 students across both houses.",
    tags: ["Apparel Design", "Graphic Design", "Dorm Merch"],
    year: "2026",
    image: "/work/dorm-apparel-1.jpg",
  },
  {
    slug: "myleague",
    number: "04",
    title: "MyLeague",
    description:
      "A web app that lets people see where they stand and connect with others within their league.",
    tags: ["Web App", "Claude API", "Supabase"],
    year: "2026",
    image: "/work/myleague-self-check.jpg",
  },
  {
    slug: "watershield",
    number: "05",
    title: "WaterShield",
    description: "A fender system that keeps longboard riders dry in wet conditions.",
    tags: ["Product Design", "Prototyping"],
    year: "2024",
    image: "/work/watershieldbbg.webp",
  },
  {
    slug: "ringallets",
    number: "06",
    title: "Ringallets",
    description: "A portable gymnastics rings training tool for any skill level.",
    tags: ["Product Design", "Training Tool"],
    year: "2023",
    image: "/work/ringalletsbbg.webp",
  },
  {
    slug: "marble-launcher",
    number: "07",
    title: "Marble Launcher",
    description: "A perpetual marble launcher inspired by the Stanford Dish telescope.",
    tags: ["Mechanical Engineering", "ME102"],
    year: "2022",
    image: "/work/marblelaunch.webp",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}
