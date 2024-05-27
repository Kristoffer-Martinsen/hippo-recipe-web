type Props = {
    ingredients: Array<{id: number, name: string, unit: string}>
}

export default function IngredientList({ ingredients }: Props) {
  
  if (!ingredients) return <h2>No ingredients found</h2>

  return (
    <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className="flex flex-row gap-2">
            <h3>{ingredient.name}</h3>
            <h3>{ingredient.unit}</h3>
          </li>
        ))}
      </ul>
  )
}
