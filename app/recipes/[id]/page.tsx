import type { RecipeResult } from "@/models/Recipes";
import RecipeContainer from "@/app/components/RecipeContainer";
import { fetchRecipes } from "@/lib/FetchRecipes";
import env from "@/lib/env";
import IngredientList from "@/app/components/IngredientList";

type Props = {
  params: {
    id: number
  }
}

export default async function page({ params: { id }}: Props) {
  const url = `${env.AZURE_URL}/Recipe/${id}`
  const recipe: RecipeResult | undefined = await fetchRecipes(url);
  
  if (!recipe) return <h2>No Recipe found</h2>

  return (
    <div className="flex flex-row my-5">
      <IngredientList ingredients={recipe.data.ingredients}/>
      <RecipeContainer recipe={recipe.data} />
    </div>
  )
}
