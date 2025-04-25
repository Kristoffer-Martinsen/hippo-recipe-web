export async function createTagAction(tagName: string): Promise<void> {
  const url = `${process.env.RECIPE_API}/Tag`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tagName }),
    });
    if (!res.ok) throw new Error('failed to create tag');
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export async function deleteTagAction(id: number): Promise<void> {
  const res = await fetch(`http://localhost:5037/api/Tag/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });

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