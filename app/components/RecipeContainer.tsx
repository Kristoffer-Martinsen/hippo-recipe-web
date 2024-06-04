'use client'

import type { RecipeResult } from "@/models/Recipes"
import Image from 'next/image';
import { useState } from "react";
import IngredientList from "@/app/components/IngredientList";
import testImage from '@/public/images/stockBannerImage.jpg';
import InstructionStepList from "@/app/components/InstructionStepList";
import { Button } from "@nextui-org/react";
import { editRecipeAction, deleteRecipeAction } from "@/lib/actions";
import { RecipeEdit } from "./RecipeEdit";

type Props = {
    recipe: RecipeResult
}

export default function RecipeContainer({ recipe }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing ? (
        <div className="flex flex-col gap-4 my-5">
            <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl">{recipe.data.name}</h1>
                <div className="space-x-4">
                <Button 
                  className="bg-sky-50 text-cyan-950"
                  onPress={() => setIsEditing(true)}
                  >Edit</Button>
                <Button 
                  className="bg-sky-50 text-cyan-950"
                  onPress={() => deleteRecipeAction(recipe.data.id)}
                  >Delete</Button>
              </div>
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
        </div>) : (
          <div>
            <RecipeEdit id={recipe.data.id}/>
            <Button 
            className="bg-sky-50 text-cyan-950"
            onPress={() => setIsEditing(false)}
            >Edit</Button>
          </div>
        )
      }
    </div>
  )
}
