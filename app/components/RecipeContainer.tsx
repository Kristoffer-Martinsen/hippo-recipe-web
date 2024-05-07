import type { Recipe } from "@/models/Recipes"
import Image from "next/image"
import Link from "next/link"

type Props = {
  recipe: Recipe
}

export default function RecipeContainer({ recipe }: Props) {
  return (
    <div key={recipe.id} className="grow h-64 p-4 bg-primary-dark rounded-xl relative overflow-hidden text-secondary">
        {/* <Image
          src={recipe.imageURL}
          alt="A picture of the recipe"
          width={200}
          height={200}
        /> */}
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
    </div>
  )
}
