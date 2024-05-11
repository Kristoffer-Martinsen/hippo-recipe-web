'use client'

import { useFormState, useFormStatus } from "react-dom";
import { createRecipeAction } from "@/lib/actions";

export function RecipeForm() {
  return (
    <form className="mx-60 my-6 space-y-4 flex flex-col text-center" 
    action={createRecipeAction}>
      <label htmlFor="recipe">Recipe</label>
      <input name="recipe" /> 
      <label htmlFor="description">Description</label>
      <input name="description" />
      <label htmlFor="ingredients">Ingredients</label>
      <input name="ingredients" />
      <label htmlFor="steps">Steps</label>
      <input name="steps" />
      <label htmlFor="imageURL">Image</label>
      <input name="imageURL" />
      <button className="my-6">Post Recipe</button>
    </form>
  )
}