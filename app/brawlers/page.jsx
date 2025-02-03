/* page.jsx/ brawlers page by Michael Joseph Tjokro*/

"use client";

import React from "react";
import fonts from "../ui/fonts.css";
import { Modal } from "react-bootstrap";
import useSWR from "swr";
import styles from "./page.module.css";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App1() {
  const IP_API_URL = "https://api.brawlapi.com/v1/brawlers";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  const [showModal, setShowModal] = React.useState(false);

  /*Keep track of the brawler 
  that was clicked on and is currently selected*/
  const [selectedBrawler, setSelectedBrawler] = React.useState(null); 
  
  const handleBrawlerItemClick = (brawler) => {
    setSelectedBrawler(brawler);
    setShowModal(true);
  };

  if (error) {
    return <h1>failed to load</h1>;
  }
  if (isLoading) {
    return <h1 className="loading">loading...</h1>;
  }

  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.brawlers_container}`}>
        {data.list.map((item, i) => (
          <div key={i} className={`${styles.brawler_item}`} onClick = {() => handleBrawlerItemClick(item)}>
            <h1 className={`${styles.brawler_name}`}>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title className={`${styles.brawlerinfo_title}`}>{selectedBrawler ? selectedBrawler.name: ""}</Modal.Title>
            </Modal.Header>
            <Modal.Body className = {`${styles.brawlerinfo}`} >
              <img src = {selectedBrawler ? selectedBrawler.imageUrl: ""}/>
              <h1 className={`${styles.brawlerinfo_header}`}>Description: </h1>
              <h5>{selectedBrawler ? selectedBrawler.description: ""}</h5>
              <h1 className={`${styles.brawlerinfo_header}`}>Star Powers: </h1>
              {selectedBrawler && selectedBrawler.starPowers && selectedBrawler.starPowers.map((item, i) => (
              <div key={i} className={`${styles.StarPowersAndGadgets}`}>
                <h2>{item.name}</h2>
                <img className={`${styles.StarPowerandGadgetImages}`}src={item.imageUrl} alt = {item.name}/>
                <h5>{item.description}</h5>
              </div>
              ))}
              <h1 className={`${styles.brawlerinfo_header}`}>Gadgets: </h1> 
              {selectedBrawler && selectedBrawler.starPowers && selectedBrawler.gadgets.map((item, i) => (
              <div key={i} className={`${styles.StarPowersAndGadgets}`}>
                <h2>{item.name}</h2>
                <img className={`${styles.StarPowerandGadgetImages}`}src={item.imageUrl} alt={item.name}/>
                <h5>{item.description}</h5>
              </div>
              ))}
            </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}