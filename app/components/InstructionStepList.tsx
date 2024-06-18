import { InstructionStep } from "@/models/InstructionStep"

export default function InstructionStepList({ instructionSteps }: {instructionSteps: InstructionStep[]}) {

  if (!instructionSteps) return <h2>No instructions found</h2>

  return (
    <ul className="flex flex-col gap-6 p-6 bg-cyan-950 text-slate-50 rounded-lg">
      {instructionSteps.map(instructionStep => (
        <li key={instructionStep.id}>
          <h3>{instructionStep.instruction}</h3>
        </li>
      ))}
    </ul>
  )
}
