export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  tags: string[];
  year: string;
  /** File in /public/work (served as /work/...) */
  image: string;
};

export const works: WorkProject[] = [
  {
    slug: "somni",
    number: "01",
    title: "Coming Soon...",
    subtitle: "Somni Dream Catch 1.0",
    tags: ["Product Design"],
    year: "2026",
    image: "/work/somni.webp",
  },
  {
    slug: "watershield",
    number: "02",
    title: "WaterShield",
    tags: ["Product Design", "Prototyping"],
    year: "2024",
    image: "/work/watershieldbbg.webp",
  },
  {
    slug: "marble-launcher",
    number: "03",
    title: "Marble Launcher",
    tags: ["Mechanical Engineering", "ME102"],
    year: "2022",
    image: "/work/marblelaunch.webp",
  },
  {
    slug: "ringallets",
    number: "04",
    title: "Ringallets",
    tags: ["Product Design", "Training Tool"],
    year: "2023",
    image: "/work/ringalletsbbg.webp",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}
