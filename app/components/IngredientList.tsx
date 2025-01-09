type Props = {
  ingredients: string;
  editing?: boolean;
};

export default function IngredientList({
  ingredients,
  editing = false,
}: Props) {
  if (!ingredients) return <h2>No ingredients found</h2>;

  const ingredientLines = ingredients.split('\n');

  return (
    <div>
      {ingredientLines.map((line, index) => (
        <div className="my-2" key={index}>
          {line}
        </div>
      ))}
    </div>
  );
}
