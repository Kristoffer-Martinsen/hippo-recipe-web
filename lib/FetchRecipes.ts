import type { RecipeListResult, RecipeResult } from "@/models/Recipes";
import { RecipeListResultSchema, RecipeResultSchema } from "@/models/Recipes";

export async function fetchAllRecipes(url: string): Promise<RecipeListResult | undefined> {
  try {
    
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch recipes \n");

    const recipeResult: RecipeListResult = await res.json();
    const parsedData = RecipeListResultSchema.parse(recipeResult);

    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export async function fetchRecipes(url: string): Promise<RecipeResult | undefined> {
  try {
    console.log('Trying to fetch', url);
    
    const res = await fetch(url);

    
    if (!res.ok) throw new Error("Failed to fetch recipes \n");
    
    const recipeResult: RecipeResult = await res.json();
    console.log('Got the response: ', recipeResult);
    const parsedData = RecipeResultSchema.parse(recipeResult);
    console.log('Parsing data: ', parsedData);
    
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}