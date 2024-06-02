'use server';

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipeAction(
    lists: { ingredients: any, steps: any, amount: any },
    formData: FormData
) {
  const recipeName = formData.get("recipe") as string;
  const description = formData.get("description") as string;
  try {
    const res = await fetch("http://localhost:5037/api/Recipe", {
      method: "POST",
      redirect: 'follow',
      body: JSON.stringify({
        name: recipeName,
        description: description,
        ingredients: lists.ingredients,
        steps: lists.steps
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error('Could not post new recipe');
    }

    await res.json();

  } catch (error) {
    console.error(error);
  }

  revalidateTag('recipes');
  redirect('/');
};

export async function deleteRecipeAction(id: number) {
  const res = await fetch(`http://localhost:5037/api/Recipe/${id}`, {
    method: "DELETE",
    redirect: 'follow',
    body: `Recipe with ID: ${id} deleted`,
    headers: {
      "content-type": "application/json",
    }
  });
  revalidateTag('recipes');
  redirect('/');
} 

export async function editRecipeAction(id: number) {
  console.log("edited", id);
  
}