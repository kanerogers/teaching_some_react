import { Settings } from './App';

interface QuizSettingsProps {
  quizSettings: Settings;
  setQuizSettings: (s: Settings) => void;
}

interface SettingProps {
  name: keyof Settings;
  settings: Settings;
  setQuizSettings: (s: Settings) => void;
}

function CoolInput(props: SettingProps) {
  return (
    <label>
      {props.name}
      <input
        type="number"
        value={props.settings[props.name]}
        onChange={(e) => {
          props.setQuizSettings({
            ...props.settings,
            [props.name]: parseInt(e.target.value),
          });
        }}
      />
    </label>
  );
}

export default function QuizSettings(props: QuizSettingsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>SETTINGS:</h1>
      {Object.keys(props.quizSettings).map((k) => (
        <CoolInput
          name={k as keyof Settings}
          settings={props.quizSettings}
          setQuizSettings={props.setQuizSettings}
        />
      ))}
    </div>
  );
}
