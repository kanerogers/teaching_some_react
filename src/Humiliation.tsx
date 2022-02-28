interface HumiliationProps {
  totalQuestions: number;
  correctAnswers: number;
}

export default function Humiliation(props: HumiliationProps) {
  return (
    <div>
      <h1>Humiliation</h1>
      <h3>
        You answered {props.correctAnswers} out of {props.totalQuestions}{' '}
        questions correctly
      </h3>
    </div>
  );
}
