import env from "@/lib/env";
import { RecipeForm } from "../components/RecipeForm";

export default function PostRecipe() {
  const url = `${env.RECIPE_API}/Recipe`;

  return (
    <main className="mx-auto w-4/5">
      <RecipeForm />
    </main>
  )
}
