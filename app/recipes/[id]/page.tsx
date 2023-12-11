import type { RecipeResult } from "@/models/Recipes";
import RecipeContainer from "@/app/components/RecipeContainer";
import { fetchRecipes } from "@/lib/FetchRecipes";
import env from "@/lib/env";
import Image from "next/image";

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
    <div>
      <RecipeContainer recipe={recipe.data} />
      {recipe.data.ingredients.map(ingredient => (
        <ul>
          {ingredient.name}
          <br></br>
          {ingredient.unit}
        </ul>
      ))}
    </div>
  )
}
