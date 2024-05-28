export default function MealPlanner() {

  const createMealPlan = (day: string) => {
    console.log("created meal plan on day " + day);
    
  }

  return (
    <div className="flex flex-row w-100 justify-between">
      <h1>Mandag</h1>
      <h1>Tirsdag</h1>
      <h1>Onsdag</h1>
      <h1>Torsdag</h1>
      <h1>Fredag</h1>
      <h1>Lørdag</h1>
      <h1>Søndag</h1>
    </div>
  )
}