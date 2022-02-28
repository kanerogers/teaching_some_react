import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuizSettings from './QuizSettings';
import Battlefield from './Battlefield';
import Humiliation from './Humiliation';

function App() {
  return (
    <div className="App">
      <QuizSettings />
      <Battlefield />
      <Humiliation />
    </div>
  );
}

export default App;
