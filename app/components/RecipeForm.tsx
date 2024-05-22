'use client'

import { createRecipeAction } from "@/lib/actions";
import { FormEvent, useState } from "react";
import { Input, Button } from "@nextui-org/react";

import UnitDropdown from "./UnitDropdown";
import { useFormState } from "react-dom";

interface Ingredient {
  name: string;
  unit: string;
}

interface Step {
  instruction: string;
}

export function RecipeForm() {
  const [ingredient, setIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [unit, setUnit] = useState<string>("grams");
  const [step, setStep] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);

  const addIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredients([...ingredients, {name: ingredient, unit: unit}]);
      setIngredient("");
    }
  }

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  }

  const addStep = () => {
    setSteps([...steps, {instruction: step}])
    setStep("");
  }

  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  }

  const formData = new FormData();
  formData.set("ingredients", JSON.stringify(ingredients));
  formData.set("steps", JSON.stringify(steps));


  return (
      <form className="mx-auto my-6 space-y-4 flex flex-col text-center" 
        action={createRecipeAction.bind(null, formData)}>
        <label htmlFor="recipe">Recipe</label>
        <Input name="recipe" /> 
        <label htmlFor="description">Description</label>
        <Input name="description" />
        <section className="flex flex-row space-x-8 mx-auto">
          <label htmlFor="ingredients">Ingredients</label>
          <Input className="w-80" 
            name="ingredients" 
            onChange={handleIngredientChange}
            value={ingredient}
            />
          <label htmlFor="unit">Unit</label>
          <UnitDropdown onUnitChange={setUnit}/>
          <Button onPress={addIngredient}>Add</Button>
        </section>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name} - {ingredient.unit}</li>
          ))}
        </ul>
        <section className="flex flex-row space-x-8 mx-auto w-3/5">
          <label htmlFor="steps">Steps</label>
          <Input 
            name="steps" 
            onChange={handleStepChange}
            value={step}
            />
          <Button onPress={addStep}>Add</Button>
        </section>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step.instruction}</li>
          ))}
        </ul>
        <label htmlFor="imageURL">Image</label>
        <Input name="imageURL" />
        <Button type="submit" className="mx-auto my-6 w-40">Post Recipe</Button>
      </form>
  )
}