'use server';

import { revalidatePath } from 'next/cache';

export async function createRecipeAction(payload: {
  recipe: string;
  description: string;
  ingredients: string;
  instructions: string;
}) {
  const { recipe, description, ingredients, instructions } = payload;

  try {
    const res = await fetch('http://localhost:5037/api/Recipe', {
      method: 'POST',
      redirect: 'follow',
      body: JSON.stringify({
        name: recipe,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Could not post new recipe');
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath('/');
}

export async function deleteRecipeAction(id: number) {
  const res = await fetch(`http://localhost:5037/api/Recipe/${id}`, {
    method: 'DELETE',
    redirect: 'follow',
    body: `Recipe with ID: ${id} deleted`,
    headers: {
      'content-type': 'application/json',
    },
  });
  revalidatePath('/');
}

export async function editRecipeAction(
  id: number,
  payload: {
    recipe: string;
    description: string;
    ingredients: string;
    instructions: string;
  }
) {
  const { recipe, description, ingredients, instructions } = payload;

  try {
    const res = await fetch(`http://localhost:5037/api/Recipe/${id}`, {
      method: 'PUT',
      redirect: 'follow',
      body: JSON.stringify({
        name: recipe,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Could update existing recipe');
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/recipes/${id}`);
}
