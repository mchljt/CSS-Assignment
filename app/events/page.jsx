/* Events page by Teo Hong Rui Freddy*/
"use client";

import styles from "./page.module.css";
import GameMode from "./Components/GameMode";
import CountdownTimer from "./Components/Countdown";
import React from "react";
import useSWR from 'swr';
import fonts from "../ui/fonts.css"; 
import {Modal}  from 'react-bootstrap'

function Banner() {
  return (
      <div className={`${styles.banner}`}>
          <img src="/media/Background4.jpg" alt="Background"></img>
          <div className={`${styles.bannertext}`}>
              <div className={`${styles.whitebox}`}>
                  <h1>Events</h1>
                  <p>Don’t miss out on the fun!</p>
              </div>
          </div>
      </div>
  )
}


const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function EventPage() {
  const IP_API_URL = "https://api.brawlapi.com/v1/events";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  const [showModal, setShowModal] = React.useState(false);

  /*Keep track of the event
  that was clicked on and is currently selected*/
  const [selectedEvent, setSelectedEvent] = React.useState(null); 
  
  const handleEventItemClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  if (error) {
    return <h1>failed to load</h1>;
  }
  if (isLoading) {
    return <h1 className="loading">loading...</h1>;
  }

  return (
    <>
    <Banner />
    <GameMode />
    <div className={`${styles.Container}`}>
      <div className={`${styles.events_container}`}>
        {data.active.map((item, i) => (
          <div key={i} className={`${styles.events_item}`} onClick = {() => handleEventItemClick(item)}>
            <h1 className={`${styles.eventname}`}>{item.slot.name}</h1>
            <h3 className={`${styles.eventmode}`}>{item.map.gameMode.name}</h3>
            <CountdownTimer startDate={item.startTime} endDate={item.endTime} />
            <img src={item.map.gameMode.imageUrl} alt={item.map.gameMode.name} width="150" height="200" />
          </div>
        ))}
        {/* Modal for displaying more information about an event when it's clicked on */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className={`${styles.eventinfo_title}`}>Event Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className = {`${styles.eventinfo}`} >
            <h1 className={`${styles.eventMname}`}>{selectedEvent ? selectedEvent.slot.name: ""}</h1>
            <h3 className={`${styles.eventMmode}`}>{selectedEvent ? selectedEvent.map.gameMode.name: ""}</h3>
            <img className={`${styles.modeImg}`}src = {selectedEvent ? selectedEvent.map.gameMode.imageUrl: ""}/>
            <h2>Map</h2>
            <h3 className={`${styles.mapname}`}>{selectedEvent ? selectedEvent.map.name: ""}</h3>
            <img src = {selectedEvent ? selectedEvent.map.imageUrl: ""}/>
          </Modal.Body>
        </Modal>
      </div>
    </div>
    </>
  );
}