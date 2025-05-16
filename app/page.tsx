import { Tag } from '@/types/tag';
import RecipeGrid from './components/recipe/RecipeGrid';
import { fetchAllTags } from '@/lib/FetchTags';
import TagList from './components/tag/TagList';

export default async function Home() {
  const tags: Tag[] | undefined = await fetchAllTags() || [];
  return (
    <div className="flex flex-row">
      <TagList tags={tags} />
      <RecipeGrid />
    </div>
  );
}
