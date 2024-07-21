import { InstructionStep } from "@/models/InstructionStep"
import { Input, Textarea } from "@nextui-org/react"

type Props = {
  instructionSteps: InstructionStep[];
  editing?: boolean;
}

export default function InstructionStepList({ instructionSteps, editing }: Props) {

  if (!instructionSteps) return <h2>No instructions found</h2>

  return (
    <div>
      {!editing ? (
        <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
          <ul className="flex flex-col gap-4">
            {instructionSteps.map(instructionStep => (
              <li key={instructionStep.id}>
                <h3>{instructionStep.instruction}</h3>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="p-6 bg-cyan-950 text-slate-50 rounded-lg">
          <ul className="flex flex-col gap-4 mb-4">
            {instructionSteps.map(instructionStep => (
              <li key={instructionStep.id}>
                <Textarea defaultValue={instructionStep.instruction} />
              </li>
            ))}
          </ul>
          <h2>Add new step</h2>
          <Textarea />
        </div>
      )}
    </div>
  )
}
