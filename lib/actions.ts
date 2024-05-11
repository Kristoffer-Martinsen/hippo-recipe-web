export async function createRecipeAction(formData: FormData) {
  console.log(formData);
  const recipeName = formData.get("recipe") as string;
  const description = formData.get("description") as string;
  const ingredients = formData.getAll("ingredients") as string[];
  const steps = formData.getAll("steps") as string[];
  const imageURL = formData.get("imageURL") as string;
  
  const res = await fetch("http://localhost:5037/api/Recipe", {
    method: "POST",
    body: JSON.stringify({
      name: recipeName,
      description,
      ingredients,
      steps,
      imageURL
    }),
    headers: {
      "content-type": "application/json",
    },
  }).catch((e) => console.log(e))
  return res;
};