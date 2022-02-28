import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizSettings from './QuizSettings';
import Battlefield from './Battlefield';
import Humiliation from './Humiliation';

export interface Settings {
  upperBound: number;
  lowerBound: number;
  interval: number;
  questions: number;
  fucks: number;
}

function printSettings(s: Settings) {
  console.log('Settings:', s);
}

function App() {
  const [quizSettings, setQuizSettings] = useState<Settings>({
    upperBound: 0,
    lowerBound: 0,
    interval: 0,
    questions: 5,
    fucks: 0,
  });

  return (
    <div className="App">
      <QuizSettings
        quizSettings={quizSettings}
        // setQuizSettings={printSettings} // as long as we follow the constraint of (s: Settings) => void, we can give it anything we want.
        setQuizSettings={setQuizSettings} // however this is more useful as it will actually.. you know, do something.
      />
      <Battlefield firstNumber={10} secondNumber={7} />
      <Humiliation correctAnswers={3} totalQuestions={5} />
      <code>{JSON.stringify(quizSettings, null, 4)}</code>
    </div>
  );
}

export default App;
