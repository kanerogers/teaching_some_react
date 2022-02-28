export default function QuizSettings() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>SETTINGS:</h1>
      <label>
        Upper bound:
        <input type="number" />
      </label>
      <label>
        Lower bound:
        <input type="number" />
      </label>
      <label>
        Interval:
        <input type="number" />
      </label>
      <label>
        Questions:
        <input type="number" />
      </label>
    </div>
  );
}
