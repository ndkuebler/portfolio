import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [];
