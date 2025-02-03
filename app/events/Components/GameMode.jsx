/* GameMode component by Teo Hong Rui Freddy*/

"use client";

import {Modal} from 'react-bootstrap';
import styles from './GameMode.module.css';
import React, { useState } from 'react';

const GameModes = [
    {
        id: 'Gem-Grab',
        name: 'Gem Grab',
        desc: 'In Gem Grab mode, the goal is to collect as many gems as possible. Gems are collected by defeating enemies and picking up the gems that they drop. The first team to collect 10 gems wins the game. If a player is defeated, they will drop all of the gems that they have picked up.',
        tips: 'It is important to keep track of how many gems each team has.',
        ftips: '-Controlling the area around the gem mine is important early in the game. Keep enemy Brawlers away while your team collects the Gems as they appear.',
        ftips2: "-A common strategy is to have one aggressive Brawler, one gem carrier, and one support Brawler."
    },
    {
        id: 'Brawl-Ball',
        name: 'Brawl Ball',
        desc: 'In Brawl Ball mode, the goal is to score 2 goals before the enemy team does. The first team to score 2 goals wins the game. If a player is defeated, they will respawn after 5 seconds. If a player is defeated while holding the ball, the ball will drop and be available for either team to pick up.',
        tips: 'Take note of where each enemy is, and, if in doubt, check bushes or stay near the goal to intercept enemies who try to score.',
        ftips: '-Brawlers that have a Super or Gadget that can clear any obstacles in the way of the goal and allow their team to score much more easily. ',
        ftips2: "-Brawlers whose Super, Gadget or main attack can knock back or stun an enemy will cause the enemy Brawler to lose possession of the ball."
    },
    {
        id: 'Hot-Zone',
        name: 'Hot Zone',
        desc: 'In Hot Zone mode, the goal is to control the zone for 50 seconds. The first team to control the zone for 50 seconds wins the game. If a player is defeated, they will respawn after 5 seconds. If a player is defeated while controlling the zone, the zone will become neutral and available for either team to control.',
        tips: 'This is an event where you must maintain position. Do not go out of your way to kill enemies if it makes you lose control over zones.',
        ftips: '-Even standing in a zone for a short period of time brings victory closer, so it is better to split up at the start of the match to start capturing each zone individually.',
        ftips2: "-Do not be afraid of taking fights into a zone as standing outside it does not allow your team to gain any points."

    },
    {
        id: 'Heist',
        name: 'Heist',
        desc: 'In Heist mode, the goal is to destroy the enemy safe before the enemy team destroys your safe. The first team to destroy the enemy safe wins the game. If a player is defeated while carrying the safe, the safe will drop and be available for either team to pick up.',
        tips: 'Teams should spread out to ensure that enemy Brawlers are not able to sneak around them unnoticed.',
        ftips: "-Try to destroy the walls protecting on the enemy safe to damage the safe quicker, and don't destroy your own walls which will give your enemies the advantage.",
        ftips2: "",
    },
    {
        id: 'Bounty',
        name: 'Bounty',
        desc: 'In Bounty mode, the goal is to defeat as many opponents as possible. Each time you defeat an opponent, your team will earn 1 star. The first team to earn 7 stars wins the game. If a player is defeated, they will drop all of the stars that they have collected.',
        tips: "In this Event, being knocked out often can really hurt your team's chance at victory",
        ftips: '-Before engaging in battle, make sure you have accessible cover.',
        ftips2: "-If you end up with a high bounty, do not be reckless. Play defensively and try to stay alive."
    },
    {
        id: 'Siege',
        name: 'Siege',
        desc: 'In Siege mode, the goal is to collect bolts and build a robot. The first team to build a robot wins the game. If a player is defeated while carrying bolts, the bolts will drop and be available for either team to pick up.',
        tips: 'Team pushes are significant. Do not rely on your Robot too much. Supporting it during a siege is critical to winning the match.',
        ftips: '-When your robot is about to spawn, stay behind it and attack from there, otherwise you risk being defeated and pushed back to the start, which will remove you from the team push.',
        ftips2: ""
    },
    {
        id: 'Show-down',
        name: 'Showdown',
        desc: 'In Showdown mode, the goal is to be the last Brawler standing. The last Brawler standing wins the game. If a player is defeated, they will be eliminated from the game.',
        tips: 'It is important to keep track of how many Brawlers are left in the game.',
        ftips: "-At the beginning of the game, go for Power Cube boxes. Normally, try to go for boxes with no one else competing with you.",
        ftips2: '-A common strategy in Showdown is to avoid battle and survive.',
    },
    {
        id: 'Wipeout',
        name: 'Wipeout',
        desc: 'In Wipeout mode, the goal is to defeat as many opponents as possible. Each time you defeat an opponent, your team will earn 1 point. The first team to earn 15 points wins the game.',
        tips: 'Always try to eliminate an enemy before the enemy team eliminates you or an ally. Getting that first elimination immediately pressures the enemy team to go on the offense.',
        ftips: '-If an enemy Brawler is staying inside of a bush to wait the match out, throwers can pressure them to fight.',
        ftips2: "-When the enemy team is in the lead, go on the offense, though be wary of being defeated to make sure you don't lose quickly."
    },
    {
        id: 'Big-Game',
        name: 'Big Game',
        desc: "Five players attempt to defeat the BIG BRAWLER. As the BIG BRAWLER, you'll have a massive power advantage, and a huge amount of health. Defy the hunters and stay in the game as long as you can! As one of the five hunters, you'll need to work together with your team to take down the BIG BRAWLER before time runs out",
        tips: "As the Big Brawler, avoid going near the spawn points as invulnerable Brawlers will spawn there.",
        ftips: "-Stun effects are a lot weaker than normal against the Big Brawler, but slow effects are normal strength.",
        ftips2: "-Attack the Big Brawler from all sides in order to overwhelm them."
    },
    {
        id: 'Knockout',
        name: 'Knockout',
        desc: "Defeat the opposing team in a best of three Knockout round contest! Be careful: defeated Brawlers stay out for the rest of each round.",
        tips: "In Knockout, one life is very important to any team. So, do everything you can to get one enemy defeated. That will put the enemy team at a disadvantage while your team has a number advantage.",
        ftips: "-It's important to have a healer on your team because survival is the main focus of Knockout.",
        ftips2: "-Stick with your teammates and watch their back. Going into combat alone is very risky and not a good option."
    },
    {
        id: 'Boss-Fight',
        name: 'Boss Fight',
        desc: "In the Boss Fight Event, three players battle against a gigantic Boss Robot. The battle starts immediately and slowly becomes more difficult by each level. With each win, the difficulty increases in the next level.",
        tips: "The respawn time is 20 seconds instead of 5 seconds, so it is important to stay alive. Avoid dying and keep dealing damage as quickly as possible.",
        ftips: "-Try to deal as much damage as possible before the Boss becomes higher in anger levels.",
        ftips2: ""
    },
    {
        id: 'Power-Play',
        name: 'Power Play',
        desc: "Power Play was a competitive mode that could be unlocked after earning a Star Power for any Brawler. Points were awarded based on the results of a match.",
        tips: "No tips available for this mode.",
        ftips: "",
        ftips2: ""
        
    },
    {
        id: 'Robo-Rumble',
        name: 'Robo Rumble',
        desc: "Defend the safe from greedy Robo Bandits! Robots will be coming for the safe from all sides, and in ever-increasing numbers. Do your best to defend until the timer runs out! Robo Rumble difficulty increases in stages, starting from NORMAL and going all the way to INSANE, every time you manage to successfully defend the safe.",
        tips: "Before the game starts, you can calculate how many shots you need to take out a single robot based on its type/color. Use this to save ammo.",
        ftips: "-Don't be separated from your team. Try to stay close to the safe and destroy as many robots as you can.",
        ftips2: "-Set up a perimeter around the safe with your teammates, guarding every entry point."
    },
  ];


  export default function GameMode() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const handleClick = (mode) => {
      setSelectedEvent(mode);
      setShowModal(true);
    };
  
    return (
      <>
        <div className={`${styles.gamemode}`}>
          <div className={`${styles.gamemodetitle}`}>
            <h1>Popular Game Modes</h1>
            <br />
          </div>
          <div className={`${styles.gamemodes}`}>
            {GameModes.map((mode) => (
              <div className={`${styles.item}`} key={mode.id}>
                <h2 onClick={() => handleClick(mode)}>{mode.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className={`${styles.eventinfo_title}`}>Mode Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className={`${styles.eventinfo}`}>
            <h1 className={`${styles.eventMname}`}>{selectedEvent ? selectedEvent.name : ''}</h1>
            <br></br>
            <h2>Description:</h2>
            <h4 className={`${styles.eventMmode}`}>{selectedEvent ? selectedEvent.desc : ''}</h4>
            <br></br>
            <h2>Tips:</h2>
            <h4 className={`${styles.eventMmode}`}>{selectedEvent ? selectedEvent.tips : ''}</h4>
            <h4 className={`${styles.eventMmode}`}>{selectedEvent ? selectedEvent.ftips : ''}</h4>
            <h4 className={`${styles.eventMmode}`}>{selectedEvent ? selectedEvent.ftips2 : ''}</h4>
            {/* Other content you want to add */}
          </Modal.Body>
        </Modal>
      </>
    );
  }