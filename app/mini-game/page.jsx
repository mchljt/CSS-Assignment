/* page.jsx / Memory game by Tay King Yu, Galen*/
/* Reference - Net Ninja Make a memory game with react(https://www.youtube.com/@NetNinja) for logic*/
/*Added - Local storage system to keep track of number of turns */
/*Added - Local storage to maintain last flipped cards*/
/*Added
 - Seeding system to create reproducable random value generator for local storage of card positions
 - Generate new random arrangements of cards by starting new game
 */
/*npm install seedrandom*/ 
"use client";
import styles from './page.module.css';
import fonts from "../ui/fonts.css" // Import for custom font
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Card from './card/card';
import { useLocalStorage } from './useLocalStorage';
import seedrandom from 'seedrandom';

/* Local storage */
const { getItem: getLocalTurns, setItem: setLocalTurns } = useLocalStorage('turns');
const { getItem: getSeed, setItem: setSeed } = useLocalStorage('seed');
const {getItem: getLocalCards, setItem: setLocalCards} = useLocalStorage('cards');

const cardImages = [
    /*Sourced from https://brawlstars.fandom.com/wiki/Profile_Icons*/ 
    {"src" : "/media/card-face-1.png", matched: false},
    {"src" : "/media/card-face-2.png", matched: false},
    {"src" : "/media/card-face-3.png", matched: false},
    {"src" : "/media/card-face-4.png", matched: false},
    {"src" : "/media/card-face-5.png", matched: false},
    {"src" : "/media/card-face-6.png", matched: false},
]


export default function MemoryGame(){
    
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    

    /* Start game automatically  */
    useEffect(() => {
        shuffleCards();
        setTurns(getLocalTurns());
        if (getLocalCards()) {
            setCards(getLocalCards());
        }
    }, []);
    
    //Shuffle
    const shuffleCards = () => { 
        if (!getLocalTurns()) {
            setLocalTurns(0)
        }

        /* Checking for and setting seed, to standardise randomiation for local storage */
        let seed = getSeed();
        if(!seed) {
            seed = Math.random().toString();
            setSeed(seed);
        }
        seedrandom(seed, {global: true});
        const shuffledCards =  [...cardImages, ...cardImages] //Spread card images twice, bringing total number of cards to 2*6
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        /*In case theer are cards selected before turns reset*/ 
        setChoiceOne(null); 
        setChoiceTwo(null); 
        setCards(shuffledCards);

        if (!getLocalCards() || getLocalCards()?.length === 0) {
            setLocalCards(shuffledCards);
        }
    }

    

    /* handle choice */ 
    const handleChoice = (card) => {
        /* console.log(card) */
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card); /* null = false, not null = true */
    }

    /* Compare 2 selected cards */
    useEffect(() => {
        if(choiceOne && choiceTwo){
            setDisabled(true) /* Disable selection of other cards during the process of comparison */
            /* Compare image links */
            if (choiceOne.src === choiceTwo.src){
                const newCards = getLocalCards().map(card => {
                    if(card.src === choiceOne.src) {
                        return {...card, matched: true} /* Change matched property to true if cards are matched in new array*/                            
                    } else {
                        return card;
                    }
                })
                setCards(newCards);
                setLocalCards(newCards);
                resetTurn() /* Increment turn by 1 */
            }
        else {
            setTimeout(() => resetTurn(), 1000) /*Pause for a split moment, so that users can see card before it is unflipped, then increment turn by 1 */ 
        }
        }
    }, [choiceOne, choiceTwo])

    /* reset after 2 cards selected, and increase number of turns */
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
        setTurns(turns + 1);
        setLocalTurns(turns + 1);
    };
     
    return(
    <>
        <div className={styles.body}>
            <div>
                <h1 className="pt-3">Brawl Match</h1>
                <Button onClick={ () => {setTurns(0);setLocalTurns(0);setLocalCards([]);setSeed(Math.random().toString());;shuffleCards()}} className={`${styles.newGameBtn}`}>New Game</Button>               
                <p className='text-primary pt-2'>Turn: {turns} </p>              
                <div className={styles.playArea}>
                    <div className={`${styles.cardGrid} ${styles.playArea}`} >
                        {cards.map((card,index) => (
                            <Card 
                                key={`${card.id}_${index}`} //Avoid generating keys that are not unque due to random function
                                card={card}
                                handleChoice={handleChoice}
                                flipped={card === choiceOne || card === choiceTwo || card.matched}
                                disabled={disabled}
                            />                 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}