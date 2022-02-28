interface BattlefieldProps {
  firstNumber: 10;
  secondNumber: 7;
}

export default function Battlefield(props: BattlefieldProps) {
  return (
    <div>
      <h1>QUIZ:</h1>
      {props.firstNumber} x {props.secondNumber} = <input type="number" />
    </div>
  );
}
