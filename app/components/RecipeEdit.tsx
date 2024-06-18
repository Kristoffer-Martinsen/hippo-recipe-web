'use client'

import { editRecipeAction } from "@/lib/actions"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import UnitDropdown from "./UnitDropdown";
import { RecipeResult } from "@/models/Recipes";

interface Ingredient {
  name: string;
  unit: string;
  amount: string;
}

interface Step {
  instruction: string;
}

type Props = {
  recipe: RecipeResult
}

export function RecipeEdit({ recipe }: Props) {
  const [ingredient, setIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [amount, setAmount] = useState<string>("");
  const [unit, setUnit] = useState<string>("grams");
  const [step, setStep] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);

  const addIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredients([...ingredients, { 
        name: ingredient, 
        unit: unit, 
        amount: amount 
      }]);
      setIngredient("");
    }
  }

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  }

  const addStep = () => {
    setSteps([...steps, { instruction: step }])
    setStep("");
  }

  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  }

  const editRecipeWithLists = editRecipeAction.bind(null, {
    ingredients: ingredients,
    steps: steps,
    amount: amount,
  });

  const handleDeleteIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const handleDeleteStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  }

  return (
    <form className="mx-auto my-6 space-y-4 flex flex-col text-center" 
        action={editRecipeWithLists}>
        <label htmlFor="recipe">Recipe</label>
        <Input name="recipe" /> 
        <label htmlFor="description">Description</label>
        <Input name="description" />
        <section className="flex flex-row space-x-8">
          <label htmlFor="ingredients">Ingredients</label>
          <Input className="w-80" 
            name="ingredients" 
            onChange={handleIngredientChange}
            value={ingredient}
            />
          <label htmlFor="amount">Amount</label>
          <Input 
            className="w-20" 
            name="amount" 
            onChange={handleAmountChange}
            value={amount}
            />
          <label htmlFor="unit">Unit</label>
          <UnitDropdown onUnitChange={setUnit}/>
          <Button onPress={addIngredient}>Add</Button>
        </section>
        <ul>
          {ingredients.map((ingredient, index) => (
              <li className="flex justify-start mx-8 items-center" key={index}><Button className="mx-8" onPress={
                () => handleDeleteIngredient(index)
              }>X</Button> {ingredient.amount} {ingredient.unit} {ingredient.name} </li>
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
              <li className="flex justify-start mx-8 items-center" key={index}><Button className="mx-8" onPress={
                () => handleDeleteStep(index)
              }>X</Button> {step.instruction} </li>
          ))}
        </ul>
        <Button type="submit" className="mx-auto my-6 w-40">Post Recipe</Button>
      </form>
  )
}