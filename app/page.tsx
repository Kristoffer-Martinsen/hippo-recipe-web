import RecipeGrid from './components/RecipeGrid';

export default async function Home() {
  // const tags: TagResult | undefined = await fetchAllTags();
  return (
    <div className="flex flex-row">
      {/* <TagList tags={tags}/> */}
      <RecipeGrid />
    </div>
  );
}
