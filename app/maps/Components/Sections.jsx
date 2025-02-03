/* Sections by Teo Hong Rui Freddy*/

import useSWR from 'swr';
import styles from './Sections.module.css';
import Buttons from './Buttons';
import React, { useEffect, useState } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Sections = () => {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);
  const [selectedGameMode, setSelectedGameMode] = useState('Gem-Grab');

  if (error) return <div>Failed to load maps</div>;
  if (!data) return <div>Loading...</div>;

  const handleGameModeChange = (gameModeId) => {
    setSelectedGameMode(gameModeId);
  };

  return (
    <>
      <Buttons onGameModeChange={handleGameModeChange} />
      <br></br><br></br>

      <div className={`${styles.Container}`}>
        <div className={`${styles.GemGrabheader}`}><h1>Gem Grab</h1></div>
        <div className={`${styles.Mode}`} id="Gem-Grab"> 
          {data.list
            .filter((map) => map.gameMode.name === "Gem Grab")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.GemGrabmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.BrawlBallheader}`}><h1>Brawl Ball</h1></div>
        <div className={`${styles.Mode}`} id="Brawl-Ball">
        {data.list
            .filter((map) => map.gameMode.name === "Brawl Ball")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.BrawlBallmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.HotZoneheader}`}><h1>Hot Zone</h1></div>
        <div className={`${styles.Mode}`} id="Hot-Zone">
        {data.list
            .filter((map) => map.gameMode.name === "Hot Zone")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.HotZonemaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Heistheader}`}><h1>Heist</h1></div>
        <div className={`${styles.Mode}`} id="Heist">
        {data.list
            .filter((map) => map.gameMode.name === "Heist")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Heistmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Bountyheader}`}><h1>Bounty</h1></div>
        <div className={`${styles.Mode}`} id="Bounty">
        {data.list
            .filter((map) => map.gameMode.name === "Bounty")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Bountymaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Siegeheader}`}><h1>Siege</h1></div>
        <div className={`${styles.Mode}`} id="Siege">
        {data.list
            .filter((map) => map.gameMode.name === "Siege")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Siegemaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Showdownheader}`}><h1>Showdown</h1></div>
        <div className={`${styles.Mode}`} id="Showdown">
        {data.list
            .filter((map) => map.gameMode.name === "Solo Showdown" || map.gameMode.name === "Duo Showdown")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Showdownmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Wipeoutheader}`}><h1>Wipe Out</h1></div>
        <div className={`${styles.Mode}`} id="Wipeout">
        {data.list
            .filter((map) => map.gameMode.name === "Wipeout")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Wipeoutmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.BigGameheader}`}><h1>Big Game</h1></div>
        <div className={`${styles.Mode}`} id="Big-Game">
        {data.list
            .filter((map) => map.gameMode.name === "Big Game")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.BigGamemaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.Knockoutheader}`}><h1>Knockout</h1></div>
        <div className={`${styles.Mode}`} id="Knockout">
        {data.list
            .filter((map) => map.gameMode.name === "Knockout")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.Knockoutmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.BossFightheader}`}><h1>Boss Fight</h1></div>
        <div className={`${styles.Mode}`} id="Boss-Fight">
        {data.list
            .filter((map) => map.gameMode.name === "Boss Fight")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.BossFightmaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br>
        <div className={`${styles.RoboRumbleheader}`}><h1>Robo Rumble</h1></div>
        <div className={`${styles.Mode}`} id="Robo-Rumble">
        {data.list
            .filter((map) => map.gameMode.name === "Robo Rumble")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2 className={`${styles.RoboRumblemaps_name}`}>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>

        <br></br><br></br>
      </div>
    </>
  );
};

export default Sections;

/*
const Sections = () => {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);
  const [selectedGameMode, setSelectedGameMode] = useState('Gem-Grab'); // Default to Gem Grab

  if (error) return <div>Failed to load maps</div>;
  if (!data) return <div>Loading...</div>;

  const handleGameModeChange = (gameModeId) => {
    setSelectedGameMode(gameModeId);
  };

  return (
    <>
      <Buttons onGameModeChange={handleGameModeChange} />
      <div className={`${styles.Container}`}>
        <div className={`${styles.GemGrab}`} id="Gem-Grab">
          <h2>Gem Grab</h2>
          {selectedGameMode === 'Gem-Grab' &&
            data.list
              .filter((map) => map.gameMode.name === 'Gem Grab') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
        <div className={`${styles.BrawlBall}`} id="Brawl-Ball">
          <h2>Brawl Ball</h2>
          {selectedGameMode === 'Brawl-Ball' &&
            data.list
              .filter((map) => map.gameMode.name === 'Brawl Ball') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
        <div className={`${styles.HotZone}`} id="Hot-Zone">
          <h2>Hot Zone</h2>
          {selectedGameMode === 'Hot-Zone' &&
            data.list
              .filter((map) => map.gameMode.name === 'Hot Zone') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Sections;
*/