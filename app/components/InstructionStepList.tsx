type Props = {
  steps: Array<{id: number, instruction: string}>
}

export default function InstructionStepList({ steps}: Props) {
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
