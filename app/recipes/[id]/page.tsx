import type { RecipeResult } from "@/models/Recipes";
import RecipeContainer from "@/app/components/RecipeContainer";
import { fetchRecipes } from "@/lib/FetchRecipes";
import env from "@/lib/env";
import IngredientList from "@/app/components/IngredientList";
import Image from 'next/image';
import testImage from '@/public/images/stockBannerImage.jpg';
import InstructionStepList from "@/app/components/InstructionStepList";

type Props = {
  params: {
    id: number
  }
}

export default async function page({ params: { id }}: Props) {
  const url = `${env.RECIPE_API}/Recipe/${id}`
  const recipe: RecipeResult | undefined = await fetchRecipes(url);
  
  if (!recipe) return <h2>No Recipe found</h2>

  return (
    <div className="flex flex-col gap-4 my-5">
        <h1>{recipe.data.name}</h1>
        <Image
          src={testImage}
          alt="A picture of the recipe"
          width={800}
          height={200}
        />
        <h1>{recipe.data.description}</h1>
      <div className="flex flex-row gap-10 my-10">
        <IngredientList ingredients={recipe.data.ingredients}/>
        <InstructionStepList steps={recipe.data.steps} />
      </div>
    </div>
  )
}
