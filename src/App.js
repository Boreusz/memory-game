import React, { useState } from 'react';
import InfoView from './InfoView';
import GameView from './GameView';
import HighscoresView from './HighscoresView'
import './App.css';

function App() {
  const [allScores, setAllScores] = useState([]);
  const [level, setLevel] = useState(1);
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  return (
    <div className="App">
      <header>
        <h1>Memory</h1>
      </header>
      <InfoView level={ level } actualScore={ actualScore } bestScore={ bestScore }/>
      <GameView level={ level } setLevel={ setLevel } actualScore={ actualScore } setActualScore= { setActualScore }
                setBestScore={ setBestScore } setAllScores = { setAllScores }/>
      <HighscoresView data={allScores} bestScore={ bestScore }/>
    </div>
  );
}

export default App;
