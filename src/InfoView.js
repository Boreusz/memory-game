import React from 'react'

function InfoView(props) {
    return(
        <div id='info-bar'>
        <h2>Level: {props.level}</h2>
        <div id='scores'>
           <h3>Score: {props.actualScore}</h3>
           <h3>Best: {props.bestScore}</h3>
        </div>
      </div>
    )
}

export default InfoView