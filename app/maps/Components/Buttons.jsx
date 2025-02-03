/* Buttons component by Teo Hong Rui Freddy*/

"use client";

import Link from 'next/link';
import styles from './Buttons.module.css'

const GameModes = [
    {
        id: 'Gem-Grab',
        name: 'Gem Grab',
    },
    {
        id: 'Brawl-Ball',
        name: 'Brawl Ball',
    },
    {
        id: 'Hot-Zone',
        name: 'Hot Zone',

    },
    {
        id: 'Heist',
        name: 'Heist',
    },
    {
        id: 'Bounty',
        name: 'Bounty',
    },
    {
        id: 'Siege',
        name: 'Siege',
    },
    {
        id: 'Showdown',
        name: 'Showdown',
    },
    {
        id: 'Wipeout',
        name: 'Wipeout',
    },
    {
        id: 'Big-Game',
        name: 'Big Game',
    },
    {
        id: 'Knockout',
        name: 'Knockout',
    },
    {
        id: 'Boss-Fight',
        name: 'Boss Fight',
    },
    {
        id: 'Robo-Rumble',
        name: 'Robo Rumble',
    },
  ];

const handleClick = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
}

export default function GameMode() {
    return (
        <div className={`${styles.gamemode}`}>
            <div className={`${styles.gamemodetitle}`}>
                <div className={`${styles.gamemodes}`}>
                    {GameModes.map((mode) => (
                        <div className={`${styles.item}`} key={mode.id}>
                            <h2 onClick={() => handleClick(mode.id)}>{mode.name}</h2>
                        </div>
                ))}
                </div>
            </div>
        </div>
    )
}