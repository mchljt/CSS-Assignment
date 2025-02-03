//For Landing page by Tay King Yu, Galen
//Hero video using bootstrap, loops indefinately
'use client';
import React from "react";
import styles from './HeroVideo.module.css';
import Image from "next/image";



const HeroVideo = () => {
  return (
    <div className={`${styles.heroVideoContainer}`}>
      <video className={styles.heroVideo} autoPlay loop muted>
        <source src="/media/bs-trailer(edited).mp4" type="video/mp4" /> {/* Video Sourced from https://www.youtube.com/watch?v=CaryjOdYFa0&ab_channel=BrawlStars */}
        Your browser does not support the video tag.
      </video>
      <div
        className={`${styles.heroSubText} d-flex align-items-center`}
      >
        <span className={styles.text}>Welcome to BrawlHub</span>
        <a href="#slider">
          <Image
              alt="Double down arrow"
              src="/media/down-arrow.gif"
              height={120}
              width={120}
              className= {` d-inline-block align-center text-white position-absoulte ml-4`}
            />
        </a>     
      </div>
      
          
    </div>
  );
};

export default HeroVideo;
