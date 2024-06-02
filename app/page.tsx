
import RecipeGrid from "./components/RecipeGrid";
import TagList from "./components/TagList";

export default async function Home() {
  return (
    <div className="flex flex-row my-5">
      <TagList />
      <RecipeGrid />
    </div>
  )
}
