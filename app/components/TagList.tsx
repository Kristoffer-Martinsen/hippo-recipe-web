import { fetchAllTags } from "@/lib/FetchTags";
import env from "@/lib/env";
import { TagResult } from "@/models/Tag";

export default async function TagList() {
  const url = `${env.RECIPE_API}/Tag`;
  const tags: TagResult | undefined = await fetchAllTags(url);

  if (!tags) return <h2>No tags found</h2>

  return (
    <div className="">
      <ul className="flex flex-col gap-4 ml-4">
        {tags.data.map(tag => (
          <li key={tag.id}>{tag.tagName}</li>
        ))}
      </ul>
    </div>
  )
}
