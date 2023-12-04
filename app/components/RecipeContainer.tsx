import type { Recipe } from "@/models/Recipes"
import Link from "next/link"

type Props = {
  recipe: Recipe
}

export default function RecipeContainer({ recipe }: Props) {
  return (
    <div key={recipe.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
      <Link href={`recipes/${recipe.id}`}>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
      </Link>
    </div>
  )
}
