import { notFound } from "next/navigation";
import ApprovedReview from "./ApprovedReview";

export default function ApprovedPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <ApprovedReview />;
}
