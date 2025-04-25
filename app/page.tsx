import { Tag } from '@/types/tag';
import RecipeGrid from './components/RecipeGrid';
import TagList from './components/TagList';
import { fetchAllTags } from '@/lib/FetchTags';

export default async function Home() {
  const tags: Tag[] | undefined = await fetchAllTags() || [];
  return (
    <div className="flex flex-row">
      <TagList tags={tags} />
      <RecipeGrid />
    </div>
  );
}
