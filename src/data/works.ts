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
    slug: "air-dj",
    number: "01",
    title: "Air DJ",
    description:
      "A gesture-controlled DJ board that replaces every knob and fader with a hand motion tracked through a webcam.",
    tags: ["Computer Vision", "ML", "Claude Code"],
    year: "2026",
    image: "/work/airdj-hero-card.jpg",
  },
  {
    slug: "watershield",
    number: "02",
    title: "WaterShield",
    description: "A fender system that keeps longboard riders dry in wet conditions.",
    tags: ["Product Design", "Prototyping"],
    year: "2024",
    image: "/work/watershieldbbg.webp",
  },
  {
    slug: "ringallets",
    number: "03",
    title: "Ringallets",
    description: "A portable gymnastics rings training tool for any skill level.",
    tags: ["Product Design", "Training Tool"],
    year: "2023",
    image: "/work/ringalletsbbg.webp",
  },
  {
    slug: "marble-launcher",
    number: "04",
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
