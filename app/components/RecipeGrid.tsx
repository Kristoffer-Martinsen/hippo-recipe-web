import type { RecipeResult } from "@/models/Recipes";
import fetchRecipes from "@/lib/FetchRecipes";
import RecipeContainer from "./RecipeContainer";


export default async function RecipeGrid() {
  const url = 'http://localhost:5037/api/Recipe';
  const recipes: RecipeResult | undefined = await fetchRecipes(url);

  if (!recipes) return <h2 className="m-4 text-2xl font-bold">No recipes found</h2>
  
  return (
    <main className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {recipes.data.map(recipe => (
        <RecipeContainer recipe={recipe} />
      ))}
    </main>
  )
}
