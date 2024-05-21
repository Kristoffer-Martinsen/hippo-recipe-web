'use client'

import { createRecipeAction } from "@/lib/actions";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

import UnitDropdown from "./UnitDropdown";

export function RecipeForm() {
  const [Ingredients, setIngredient] = useState([]);
  const [Steps, setSteps] = useState([])

  const addIngredient = () => {
    console.log("Added ingredient");
    
  }

  const addStep = () => {
    console.log("Added steps");
    
  }

  return (
    <form className="mx-auto my-6 space-y-4 flex flex-col text-center" 
    action={createRecipeAction}>
      <label htmlFor="recipe">Recipe</label>
      <Input name="recipe" /> 
      <label htmlFor="description">Description</label>
      <Input name="description" />
      <section className="flex flex-row space-x-8">
        {/* TODO Make the input a list you can add to */}
        <label htmlFor="ingredients">Ingredients</label>
        <Input className="w-80" name="ingredients" />
        <label htmlFor="unit">Unit</label>
        <UnitDropdown />
        <Button onPress={addIngredient}>Add</Button>
      </section>
      <section className="flex flex-row space-x-8 mx-auto">
        <label htmlFor="steps">Steps</label>
        <Input name="steps" />
        <Button onPress={addStep}>Add</Button>
      </section>
      <label htmlFor="imageURL">Image</label>
      <Input name="imageURL" />
      <Button className="mx-auto my-6 w-40">Post Recipe</Button>
    </form>
  )
}