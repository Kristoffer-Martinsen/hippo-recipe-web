type Props = {
    ingredients: Array<{id: number, name: string, unit: string}>
}

export default function IngredientList({ ingredients }: Props) {
  
  return (
    <ul className="m-5">
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className="flex flex-row bg-secondary my-2 gap-8">
            <h3>{ingredient.name}</h3>
            <h3>{ingredient.unit}</h3>
          </li>
        ))}
      </ul>
  )
}
