import React, { useState } from 'react'
import Card from "./Card";

const GameView = (props) => {
    const cards = [['a', 'lorem Ipsom Dolor', 'false'], ['b', 'lorem Ipsom Dolor', 'false'],
                    ['c', 'lorem Ipsom Dolor', 'false'], ['d', 'lorem Ipsom Dolor', 'false'],
                    ['e', 'lorem Ipsom Dolor', 'false'], ['f', 'lorem Ipsom Dolor', 'false'],
                    ['g', 'lorem Ipsom Dolor', 'false'], ['h', 'lorem Ipsom Dolor', 'false'],
                    ['i', 'lorem Ipsom Dolor', 'false'], ['j', 'lorem Ipsom Dolor', 'false'],
                    ['k', 'lorem Ipsom Dolor', 'false'], ['l', 'lorem Ipsom Dolor', 'false']]

    const prepareLevel = (level) => {
        let amoutOfCards = 2 + (2*level)
        let usedCards = cards.slice(0,amoutOfCards)
        setActiveCards(usedCards)
        setNextLevelCondition(NextLevelCondition + amoutOfCards )
    }
    const ShuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    const editCardStatusToTrue = (index) => {
        let cardsCopy = [...activeCards];
        let cardCopy = [...cardsCopy[parseInt(index)]]
        cardCopy[2] = "true";
        cardsCopy[parseInt(index)] = cardCopy;
        return cardsCopy
    }
    const handleClick = (e) => {
        if(e.target.getAttribute('clicked') === 'false'){
            let cardsToShuffle = editCardStatusToTrue(e.target.id)
            setActiveCards(ShuffleCards(cardsToShuffle));
            props.setActualScore()
            updateGame()
        }else{
            props.addLastGame()
            resetGame()
        }
    }
    const resetGame = () => {
        props.resetScore()
        props.resetLevel()
        setNextLevelCondition(4)
        setActiveCards(ShuffleCards(cards).slice(0,4))
        alert('GAME OVER');
    }
    const updateGame = () => {
        if((props.score+1) === NextLevelCondition && props.level <= 5){
            props.setLevel()
            prepareLevel(props.level+1)
        }else if ((props.score+1) === activeCards.length && props.level === 5){
            alert("YOU WON")
        }
    }
    const [ activeCards, setActiveCards] = useState(ShuffleCards(cards).slice(0,4))
    const [NextLevelCondition, setNextLevelCondition] = useState(4)
    return(
        <div id='game-board'>
            {activeCards.map((card,index) => <Card key={`c${index}`} id={index} value={card[0]} description={card[1]} status={card[2]} handler={handleClick}/>)}
        </div>
    )
}
export default GameView