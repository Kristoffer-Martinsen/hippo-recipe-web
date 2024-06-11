import type { TagResult } from "@/models/Tag";
import { TagResultSchema } from "@/models/Tag";

export async function fetchAllTags(url: string): Promise<TagResult | undefined> {
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