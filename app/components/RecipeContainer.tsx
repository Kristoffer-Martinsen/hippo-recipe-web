import type { Recipe } from "@/models/Recipes"

type Props = {
  recipe: Recipe
}

export default function RecipeContainer({ recipe }: Props) {
  return (
    <div key={recipe.id} className="bg-cyan-950 text-slate-50 min-w-40 grow h-64 p-4 rounded-xl relative overflow-hidden">
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
