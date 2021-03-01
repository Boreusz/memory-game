import React from 'react'

const HighScoresView = (props) =>{
    return(
        <div id='game-history'>
            <h2>History of Games:</h2>
            <ol>
                {props.data.map((game) => <li>Level: {game.level} - <span className={props.bestScore === game.score ? 'best-score': null }>Score: {game.score}</span></li>)}
            </ol>
        </div>
    )
}
export default HighScoresView