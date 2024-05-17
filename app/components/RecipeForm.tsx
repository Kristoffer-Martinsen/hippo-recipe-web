'use client'

import { useFormState, useFormStatus } from "react-dom";
import { createRecipeAction } from "@/lib/actions";
import { use, useState } from "react";
import UnitDropdown from "./UnitDropdown";

export function RecipeForm() {
  const [Ingredients, setIngredient] = useState([]);
  return (
    <form className="my-6 space-y-4 flex flex-col text-center" 
    action={createRecipeAction}>
      <label htmlFor="recipe">Recipe</label>
      <input name="recipe" /> 
      <label htmlFor="description">Description</label>
      <input name="description" />
      <section className="flex flex-row space-x-8">
        {/* TODO Make the input a list you can add to */}
        <label htmlFor="ingredients">Ingredients</label>
        <input className="w-80" name="ingredients" />
        <label htmlFor="unit">Unit</label>
        <UnitDropdown />
        <button>Add</button>
      </section>
      <label htmlFor="steps">Steps</label>
      <input name="steps" />
      <label htmlFor="imageURL">Image</label>
      <input name="imageURL" />
      <button className="my-6">Post Recipe</button>
    </form>
  )
}