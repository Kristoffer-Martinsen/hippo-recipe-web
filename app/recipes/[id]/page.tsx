import RecipeContainer from "@/app/components/RecipeContainer";
import fetchRecipes from "@/lib/FetchRecipes";

type Props = {
  params: {
    id: number
  }
}

export default async function page({ params: { id }}: Props) {
  const url = `http://localhost:5037/api/Recipe/${id}`
  const recipe = await fetchRecipes(url);

  if (!recipe) return <h2>No Recipe found</h2>

  return (
    <div>
      <RecipeContainer recipe={recipe} />
    </div>
  )
}
