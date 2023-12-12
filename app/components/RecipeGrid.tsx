import type { RecipeListResult } from "@/models/Recipes";
import { fetchAllRecipes } from "@/lib/FetchRecipes";
import RecipeContainer from "./RecipeContainer";
import env from "@/lib/env";
import Link from "next/link";


export default async function RecipeGrid() {
  const url = `${env.AZURE_URL}/Recipe`;
  const recipes: RecipeListResult | undefined = await fetchAllRecipes(url);

  if (!recipes) return <h2 className="m-4 text-2xl font-bold">No recipes found</h2>

  return (
    <main className="max-w-6xl mx-auto px-2 my-6 grid gap-2 grid-cols-4">
      {recipes.data.map(recipe => (
        <Link href={`recipes/${recipe.id}`}>
          <RecipeContainer recipe={recipe} />
        </Link>
      ))}
    </main>
  )
}
