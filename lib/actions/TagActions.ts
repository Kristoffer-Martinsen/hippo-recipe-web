'use server';
import { revalidatePath } from "next/cache";

export async function createTagAction(tagName: string): Promise<void> {
  if (!tagName) {
    return; // Add popup or something when no tag name is defined
  }
  const res = await fetch(`https://localhost:7139/api/Tag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tagName }),
  });
  revalidatePath('/');
}

export async function deleteTagAction(id: number): Promise<void> {
  const res = await fetch(`https://localhost:7139/api/Tag/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
  revalidatePath('/');
}

export async function editTag(id: number, tagName: string): Promise<void> {
  const url = `${process.env.RECIPE_API}/Tag/${id}`;
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tagName }),
    });
    if (!res.ok) throw new Error('failed to edit tag');
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}