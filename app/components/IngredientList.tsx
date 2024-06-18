import { Ingredient } from "@/models/Ingredient"

export default function IngredientList({ ingredients }: { ingredients: Ingredient[]}) {
  if (!ingredients) return <h2>No ingredients found</h2>

  return (
    <ul className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className="flex flex-row gap-2">
            <h3>{ingredient.amount}</h3>
            <h3>{ingredient.unit}</h3>
            <h3>{ingredient.name}</h3>
          </li>
        ))}
      </ul>
  )
}
