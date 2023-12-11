import type { Recipe } from "@/models/Recipes"
import Image from "next/image"
import Link from "next/link"

type Props = {
  recipe: Recipe
}

export default function RecipeContainer({ recipe }: Props) {
  return (
    <div key={recipe.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
      <Link href={`recipes/${recipe.id}`}>
        <Image
          src={recipe.imageURL}
          alt="A picture of the recipe"
          width={200}
          height={200}
        />
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
      </Link>
    </div>
  )
}
