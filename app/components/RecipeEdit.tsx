'use client'
import { RecipeResult } from "@/models/Recipes";
import { Button, Input, Textarea } from "@nextui-org/react";
import Image from 'next/image';
import testImage from '@/public/images/stockBannerImage.jpg';
import IngredientList from "@/app/components/IngredientList";
import InstructionStepList from "@/app/components/InstructionStepList";

type Props = {
  recipe: RecipeResult;
  updateEditing: () => void;
}

export function RecipeEdit({ recipe, updateEditing }: Props) {
  
  return (
    <div>
      <div className="flex flex-col gap-4 my-5">
        <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
          <div className="flex flex-row justify-between">
            <Input 
              className="text-2xl"
              defaultValue={recipe.data.name}  
            />
          </div>
            <Image
              className="my-2"
              src={testImage}
              alt="A picture of the recipe"
              width={800}
              height={200}
            />
            <Textarea
              className=""
              defaultValue={recipe.data.description}
            />
          </div>
          <div className="flex flex-row gap-4 my-1">
            <div className="w-2/4">
              <IngredientList 
                ingredients={recipe.data.ingredients} 
                editing={true}
              />
            </div>
            <div className="w-2/4">
              <InstructionStepList 
                instructionSteps={recipe.data.steps} 
                editing={true} 
              />
            </div>
          </div>
        </div>
      <div className="mx-auto">
        <Button>Save</Button>
        <Button
          onPress={updateEditing}>Cancel</Button>
      </div>
    </div>
  )
}