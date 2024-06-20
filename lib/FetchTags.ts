import type { TagResult } from "@/models/Tag";
import { TagResultSchema } from "@/models/Tag";
import env from "@/lib/env";

export async function fetchAllTags(): Promise<TagResult | undefined> {
  const url = `${env.RECIPE_API}/Tag`;
  try {
    const res = await fetch(url, { next: { revalidate: 30, tags: ['tags']}});
    if (!res.ok) throw new Error('failed to fetch recipes');
    const tagResult: TagResult = await res.json();
    const parsedData = TagResultSchema.parse(tagResult);
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}