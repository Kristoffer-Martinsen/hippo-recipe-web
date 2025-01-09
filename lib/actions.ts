'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

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

  // revalidateTag('recipes');
  // redirect('/');
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
  revalidateTag('recipes');
  redirect('/');
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
  console.log('editRecipeAction');

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

  revalidateTag('recipes');
  redirect('/');
}
