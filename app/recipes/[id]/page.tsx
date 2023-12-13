import type { RecipeResult } from "@/models/Recipes";
import RecipeContainer from "@/app/components/RecipeContainer";
import { fetchRecipes } from "@/lib/FetchRecipes";
import env from "@/lib/env";
import IngredientList from "@/app/components/IngredientList";
import Image from 'next/image';
import InstructionStepList from "@/app/components/InstructionStepList";

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
    <div className="my-5">
        <h1>{recipe.data.name}</h1>
        <Image
          src={recipe.data.imageURL}
          alt="A picture of the recipe"
          width={1000}
          height={200}
        />
        <h1>{recipe.data.description}</h1>
      <div className="flex flex-row">
        <IngredientList ingredients={recipe.data.ingredients}/>
        <InstructionStepList steps={recipe.data.steps} />
      </div>
    </div>
  )
}
