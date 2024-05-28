export async function createRecipeAction(
    lists: { ingredients: any, steps: any, amount: any },
    formData: FormData
) {
  const recipeName = formData.get("recipe") as string;
  const description = formData.get("description") as string;
  
  const res = await fetch("http://localhost:5037/api/Recipe", {
    method: "POST",
    body: JSON.stringify({
      name: recipeName,
      description: description,
      ingredients: lists.ingredients,
      steps: lists.steps
    }),
    headers: {
      "content-type": "application/json",
    },
  }).catch((e) => console.log(e))
  return res;
};
