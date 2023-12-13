type Props = {
  steps: Array<{id: number, instruction: string}>
}

export default function InstructionStepList({ steps}: Props) {

  if (!steps) return <h2>No instructions found</h2>

  return (
    <ul>
      {steps.map(step => (
        <li key={step.id}>
          <h3>{step.instruction}</h3>
        </li>
      ))}
    </ul>
  )
}
