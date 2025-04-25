import env from "@/lib/env";
import { Tag } from "@/types/tag";
import { ApiResponse } from '@/types/api';

export async function fetchAllTags(): Promise<Tag[] | undefined> {
  const url = `${env.RECIPE_API}/Tag`;
  try {
    const res = await fetch(url, { next: { revalidate: 30, tags: ['tags']}});
    if (!res.ok) throw new Error('failed to fetch recipes');
    const tagResult: ApiResponse<Tag[]> = await res.json();
    return tagResult.data as Tag[];
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
    return [];
  }
}
