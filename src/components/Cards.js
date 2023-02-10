import React from "react"

const Cards = (props) => {
    return (
        <div>
            <h1>Your deck is {props.deckID} and has {props.cardsLeft} cards remaining</h1>
            <button onClick={props.drawTwoCards}>
                {props.snapFound || props.cardsLeft === 0 ? "Play again" : "Draw 2 cards"}
            </button>
            <div>
                {props.card1 && <img src={props.card1.image} />}
                {props.card2 && <img src={props.card2.image} />}
            </div>
            {props.snapFound && <h1>SNAP!</h1>}
            {(props.cardsLeft === 0 && !props.snapFound) && <h1>You lose!</h1>}
        </div>
    )
}

export default Cards