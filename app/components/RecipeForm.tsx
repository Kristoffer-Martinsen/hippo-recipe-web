'use client';

import { createRecipeAction } from '@/lib/actions';
import { RecipePayload } from '@/types/recipe';
import { Input, Button, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function RecipeForm() {
  const router = useRouter();

  const handleCreateRecipe = async (payload: RecipePayload) => {
    await createRecipeAction(payload);
    router.push(`/`);
  };

  return (
    <form
      className="w-3/5"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ingredients = formData.get('ingredients');
        const instructions = formData.get('instructions');

        const payload = {
          recipe: formData.get('recipe') as string,
          description: formData.get('description') as string,
          ingredients: ingredients
            ? ingredients.toString().replace(/\r\n/g, '\n')
            : '',
          instructions: instructions
            ? instructions.toString().replace(/\r\n/g, '\n')
            : '',
        };
        await handleCreateRecipe(payload);
      }}
    >
      <div className="my-6 space-y-4">
        <label htmlFor="recipe">Recipe</label>
        <Input name="recipe" />
        <label htmlFor="description">Description</label>
        <Input name="description" />
        <section>
          <label htmlFor="ingredients">Ingredients</label>
          <Textarea minRows={8} name="ingredients" />
        </section>
        <section>
          <label htmlFor="instructions">Steps</label>
          <Textarea minRows={8} name="instructions" />
        </section>
        {/* <section className="flex flex-row space-x-8 mx-auto w-3/5">
        <label htmlFor="tags">Tags</label>
        <Input name="tags" onChange={handleStepChange} value={step} />
        <Button onPress={addStep}>Add</Button>
      </section> */}
        <Button
          type="submit"
          className="flex mx-auto my-6 w-40 justify-center items-center"
        >
          Post Recipe
        </Button>
      </div>
    </form>
  );
}
