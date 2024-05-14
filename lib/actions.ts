export async function createRecipeAction(formData: FormData) {
  console.log(formData);
  const recipeName = formData.get("recipe") as string;
  const description = formData.get("description") as string;
  const ingredientsList = formData.getAll("ingredients") as string[];
  const ingredients: {name: string; unit: string}[] = ingredientsList.map((ingredient: string) => {
    const [ name, unit ] = ingredient.split(":");
    return { name, unit: "g" }
  }); 
  const stepsList = formData.getAll("steps") as string[];
  const steps: { instruction: string }[] = stepsList.map((step: string) => {
    return { instruction: step };
  });
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