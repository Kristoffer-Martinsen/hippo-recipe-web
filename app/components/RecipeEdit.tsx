'use client'

type IdProp = {
  id: number
}

import { Button } from "@nextui-org/react"
import { deleteRecipeAction, editRecipeAction } from "@/lib/actions";

export function RecipeEdit({id}: IdProp) {
  return (
  <div className="space-x-4">
    <Button 
      className="bg-sky-50 text-cyan-950"
      onPress={() => editRecipeAction(id)}
      >Edit</Button>
    <Button 
      className="bg-sky-50 text-cyan-950"
      onPress={() => deleteRecipeAction(id)}
      >Delete</Button>
  </div>
  )
}