import { notFound } from "next/navigation";
import IdeationSwipe from "./IdeationSwipe";

const SECRET_KEY = "nk2026";

export default async function IdeatePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const isDev = process.env.NODE_ENV === "development";
  const hasKey = params.key === SECRET_KEY;

  if (!isDev && !hasKey) {
    notFound();
  }

  return <IdeationSwipe />;
}
