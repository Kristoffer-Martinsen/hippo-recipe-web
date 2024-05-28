type Props = {
  steps: Array<{id: number, instruction: string}>
}

export default function InstructionStepList({ steps}: Props) {

  if (!steps) return <h2>No instructions found</h2>

  return (
    <ul className="flex flex-col gap-6 p-6 bg-cyan-950 text-slate-50 rounded-lg">
      {steps.map(step => (
        <li key={step.id}>
          <h3>{step.instruction}</h3>
        </li>
      ))}
    </ul>
  )
}
