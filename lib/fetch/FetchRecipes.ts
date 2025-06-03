import { ApiResponse } from '@/types/api';
import { Recipe } from '@/types/recipe';

export async function fetchAllRecipes(url: string): Promise<Recipe[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 30, tags: ['recipes'] },
    });

    if (!res.ok) throw new Error('Failed to fetch recipes \n');

    const recipeResult: ApiResponse<Recipe[]> = await res.json();

    return recipeResult.data;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
    return [];
  }
}

export async function fetchRecipes(url: string): Promise<Recipe | undefined> {
  try {
    const res = await fetch(url, { next: { revalidate: 30 } });

    if (!res.ok) throw new Error('Failed to fetch recipes \n');

    const recipeResult: ApiResponse<Recipe> = await res.json();
    return recipeResult.data;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
