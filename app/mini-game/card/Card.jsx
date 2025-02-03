//For mini-game by Tay King Yu, Galen
import styles from "./card.module.css"
import Image from "next/image";

export default function Card({ card, handleChoice, flipped, disabled }) {

    function handleClick (){
        if(!disabled){
            handleChoice(card);
        }
    }

    return (
        <>
            <div className={`${styles.card}`} key={card.id}>
                <div className={flipped? styles.flipped : ``}>
                    <Image
                        src={card.src}
                        alt="card face front"
                        height={180}
                        width={180}
                        className={`${styles.cardImg} ${styles.front}`}
                    />
                    <Image
                        src="/media/brawl-card.png"
                        alt='card face back'
                        height={180}
                        width={180}
                        className={`${styles.cardImg} ${styles.back}`}
                        onClick={handleClick}
                        
                    />
                </div>
            </div>
        </>
    )
}
