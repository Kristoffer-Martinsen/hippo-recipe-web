import type { RecipeResult } from "@/models/Recipes";
import { RecipeResultSchema } from "@/models/Recipes";

export default async function fetchRecipes(url: string): Promise<RecipeResult | undefined> {
  try {
    
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch recipes \n");

    const recipeResult: RecipeResult = await res.json();

    const parsedData = RecipeResultSchema.parse(recipeResult);

    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}