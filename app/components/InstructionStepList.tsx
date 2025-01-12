import { Input, Textarea } from '@nextui-org/react';

type Props = {
  instructionSteps: string;
  editing?: boolean;
};

export default function InstructionStepList({
  instructionSteps,
  editing,
}: Props) {
  if (!instructionSteps) return <h2>No instructions found</h2>;

  const instructionList = instructionSteps.split('\n');

  return (
    <div>
      {instructionList.map((line, index) => (
        <div className="my-2" key={index}>
          {line}
        </div>
      ))}
    </div>
  );
}
