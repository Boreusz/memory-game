import React, { useState } from 'react';
import InfoView from './InfoView';
import GameView from './GameView';
import HighscoresView from './HighscoresView'
import './App.css';
import './gameboard.css';

const App = () => {
  const [allScores, setAllScores] = useState([]);
  const [level, setLevel] = useState(1);
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const scoreUpdate = () => {
    setActualScore(actualScore + 1)
    if((actualScore +1) >= bestScore){
      setBestScore(actualScore +1)
    }
  }
  const levelUpdate = () => {
    setLevel(level + 1)
  }
  const resetScore = () => {
    setActualScore(0)
  }
  const resetLevel = () => {
    setLevel(1)
  }
  const addLastGame = () => {
    setAllScores(allScores => [...allScores, {level: level, score: actualScore}])
  }
  return (
    <>
      <div className="App">
        <header>
          <h1>Memory</h1>
          <InfoView level={ level } actualScore={ actualScore } bestScore={ bestScore }/>
        </header>
        <GameView score={ actualScore } level={ level } setLevel={ levelUpdate } setActualScore= { scoreUpdate } setBestScore={ setBestScore }
                  setAllScores = { setAllScores } resetScore = { resetScore } resetLevel={ resetLevel } addLastGame={addLastGame}/>
        { allScores.length > 0 ? <HighscoresView data={allScores} bestScore={ bestScore }/> : null }
      </div>
      <footer>
        <span>Done by <a href='https://github.com/Boreusz'>Broreusz</a></span>
      </footer>
  </>
  );
}

export default App;
