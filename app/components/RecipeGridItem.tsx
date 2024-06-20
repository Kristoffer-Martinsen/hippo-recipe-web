import { RecipeResult } from "@/models/Recipes";

export default function RecipeGridItem({recipe}: { recipe: RecipeResult['data']}) {
  return (
    <div>
        <div className="flex flex-col gap-4">
            <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl">{recipe.name}</h1>
              </div>
              <h1>{recipe.description}</h1>
            </div>
        </div>
    </div>
  )
}