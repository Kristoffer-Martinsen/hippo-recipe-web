import { fetchRecipes } from '@/lib/FetchRecipes';
import env from '@/lib/env';
import RecipeContainer from '@/app/components/RecipeContainer';
import { Recipe } from '@/types/recipe';

type Props = {
  params: {
    id: number;
  };
};

export default async function page({ params: { id } }: Props) {
  const url = `${env.RECIPE_API}/Recipe/${id}`;
  const recipe: Recipe | undefined = await fetchRecipes(url);

  if (!recipe) return <h2>No Recipe found</h2>;

  return <RecipeContainer recipe={recipe} />;
}
