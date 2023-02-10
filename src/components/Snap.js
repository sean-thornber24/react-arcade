import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Snap = () => {
    const [deckID, setDeckID] = useState(null);
    const [cardsLeft, setCardsLeft] = useState(null);
    const [snapFound, setSnapFound] = useState(false);
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    const drawTwoCards = () => {
        if (cardsLeft === 0 || snapFound) {
            newGameEvent()
            setSnapFound(false)
            setCard1(null)
            setCard2(null)
        }
        else {
            fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCardsLeft(res.remaining)
                setCard1(res.cards[0]);
                setCard2(res.cards[1]);
                setSnapFound(res.cards[0].value === res.cards[1].value)
            })
        }
    }

    const newGameEvent = () => {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setDeckID(res.deck_id)
                setCardsLeft(res.remaining)
                setIsLoaded(true);
            })
    }

    useEffect(() => {
        newGameEvent();
    }, []);

    if (!isLoaded) {
        return <div><h1>Loading...</h1></div>
    }
    else {
        return <div>
            <Cards deckID={deckID}
                cardsLeft={cardsLeft}
                card1={card1}
                card2={card2}
                snapFound={snapFound}
                drawTwoCards={drawTwoCards}/>
        </div>
    }
}

export default Snap;

