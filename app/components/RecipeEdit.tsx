'use client';
import { Button, Input, Textarea } from '@nextui-org/react';
import { Recipe } from '@/types/recipe';
import { editRecipeAction } from '@/lib/actions';

type Props = {
  recipe: Recipe;
  updateEditing: () => void;
};

export function RecipeEdit({ recipe, updateEditing }: Props) {
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
        console.log('Submitting edited recipe');

        await editRecipeAction(recipe.id, payload);
      }}
    >
      <div className="my-6 space-y-4">
        <label htmlFor="recipe">Recipe</label>
        <Input name="recipe" defaultValue={recipe.name} />
        <label htmlFor="description">Description</label>
        <Input name="description" defaultValue={recipe.description} />
        <section>
          <label htmlFor="ingredients">Ingredients</label>
          <Textarea
            minRows={8}
            name="ingredients"
            defaultValue={recipe.ingredients}
          />
        </section>
        <section>
          <label htmlFor="instructions">Steps</label>
          <Textarea
            minRows={8}
            name="instructions"
            defaultValue={recipe.instructions}
          />
        </section>
        {/* <section className="flex flex-row space-x-8 mx-auto w-3/5">
            <label htmlFor="tags">Tags</label>
            <Input name="tags" onChange={handleStepChange} value={step} />
            <Button onPress={addStep}>Add</Button>
          </section> */}
        <div className="mx-auto">
          <Button type="submit">Save</Button>
          <Button onPress={updateEditing}>Cancel</Button>
        </div>
      </div>
    </form>
  );
}
