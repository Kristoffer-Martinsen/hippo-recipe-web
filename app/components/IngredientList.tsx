import { useState } from "react";
import { Ingredient } from "@/models/Ingredient"
import { Input, Button } from "@nextui-org/react"
import UnitDropdown from "./UnitDropdown";

type Props = {
  ingredients: Ingredient[];
  editing?: boolean;
}

export default function IngredientList({ ingredients, editing = false}: Props) {
  const [unit, setUnit] = useState<string>("grams");

  if (!ingredients) return <h2>No ingredients found</h2>

  return (
    <div>
      {!editing ? (
        <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
          <ul className="flex flex-col gap-1">
            {ingredients.map(ingredient => (
              <li key={ingredient.id} className="flex flex-row gap-2">
                <h3>{ingredient.amount}</h3>
                <h3>{ingredient.unit}</h3>
                <h3>{ingredient.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      ): (
      <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
        <ul className="flex flex-col gap-1 mb-4">
          {ingredients.map(ingredient => (
            <li key={ingredient.id} className="flex flex-row gap-2">
              <Input
                defaultValue={ingredient.amount.toString()} />
              <UnitDropdown 
                onUnitChange={setUnit}
                defaultUnit={ingredient.unit} />
              <Input 
                defaultValue={ingredient.name}/>
            </li>
          ))}
        </ul>
        <h2>Add new ingredient</h2>
        <section className="flex flex-row space-x-8">
          <div className="flex flex-col w-1/6">
            <label htmlFor="amount">Amount</label>
            <Input 
              className="w-20" 
              name="amount" 
              />
          </div>
          <div className="flex flex-col">
            <label htmlFor="unit">Unit</label>
            <UnitDropdown 
                onUnitChange={setUnit} />
          </div>
          <div className="flex flex-col w-3/6">
            <label htmlFor="ingredients">Ingredients</label>
            <Input 
              name="ingredients"
              />
          </div>
        </section>
        <Button className="mt-2">Add</Button>
      </div>
      )} 
    </div>
  )
}
