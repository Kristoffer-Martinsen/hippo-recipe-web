import type { RecipeResult } from "@/models/Recipes";
import RecipeContainer from "@/app/components/RecipeContainer";
import { fetchRecipes } from "@/lib/FetchRecipes";
import env from "@/lib/env";
import IngredientList from "@/app/components/IngredientList";
import Image from 'next/image';
import testImage from '@/public/images/stockBannerImage.jpg';
import InstructionStepList from "@/app/components/InstructionStepList";
import { RecipeEdit } from "@/app/components/RecipeEdit";


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
        <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl">{recipe.data.name}</h1>
            <RecipeEdit id={id}/>
          </div>
          <Image
            src={testImage}
            alt="A picture of the recipe"
            width={800}
            height={200}
          />

          <h1>{recipe.data.description}</h1>
        </div>
      <div className="flex flex-row gap-4 my-1">
        <IngredientList ingredients={recipe.data.ingredients}/>
        <InstructionStepList steps={recipe.data.steps} />
      </div>
    </div>
  )
}
