import { fetchAllRecipes } from '@/lib/FetchRecipes';
import env from '@/lib/env';
import Link from 'next/link';
import RecipeGridItem from './RecipeGridItem';
import { Recipe } from '@/types/recipe';

export default async function RecipeGrid() {
  const url = `${env.RECIPE_API}/Recipe`;
  const recipes: Recipe[] | undefined = await fetchAllRecipes(url);

  if (recipes === undefined || recipes.length == 0)
    return <h2 className="m-4 text-2xl font-bold">No recipes found</h2>;

  return (
    <main className="px-2 grid gap-2 grid-cols-4 mx-auto ">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link href={`recipes/${recipe.id}`}>
            <RecipeGridItem recipe={recipe} />
          </Link>
        </div>
      ))}
    </main>
  );
}
