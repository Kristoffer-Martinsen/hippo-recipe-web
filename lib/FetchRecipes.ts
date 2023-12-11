import type { RecipeListResult, RecipeResult } from "@/models/Recipes";
import { RecipeListResultSchema, RecipeResultSchema } from "@/models/Recipes";

export async function fetchAllRecipes(url: string): Promise<RecipeListResult | undefined> {
  try {
    
    const res = await fetch(url, {next: {revalidate: 30}});
    
    
    if (!res.ok) throw new Error("Failed to fetch recipes \n");

    const recipeResult: RecipeListResult = await res.json();
    console.log(recipeResult);
    
    const parsedData = RecipeListResultSchema.parse(recipeResult);

    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export async function fetchRecipes(url: string): Promise<RecipeResult | undefined> {
  try {
    
    const res = await fetch(url, {next: {revalidate: 30}});

    
    if (!res.ok) throw new Error("Failed to fetch recipes \n");
    
    const recipeResult: RecipeResult = await res.json();
    const parsedData = RecipeResultSchema.parse(recipeResult);
    
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}