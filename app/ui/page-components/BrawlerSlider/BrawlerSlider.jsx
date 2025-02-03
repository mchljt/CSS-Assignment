// For landing page by Tay King Yu, Galen
// Automated sliding cards to display several brawl stars related images
'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Image from "next/legacy/image";
import styles from "./BrawlerSlider.module.css"

const BrawlerSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        centerMode: true,
        centerPadding: "2em", // Adjust the padding between items
        autoplay: true, 
        autoplaySpeed: 2000, // Set the auto-scroll speed in milliseconds
    
  };

  return (
    /* Slider items sourced from https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en&gl=US */
    <div className="custom-card-group-container pt-5 mb-5" id="slider">
      <Slider {...settings} className={styles.customSlider}>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 1"
                src="/media/slider-item1.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 2"
                src="/media/slider-item2.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 3"
                src="/media/slider-item3.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 4"
                src="/media/slider-item4.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 5"
                src="/media/slider-item5.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className={`custom-card ${styles.customCard}`} style={{ border: "8px solid yellow" }}>
            <div className="ratio ratio-16x9 position-relative">
              <Image
                alt="Slider item 6"
                src="/media/slider-item6.png"
                layout="fill"
                objectFit="cover"
                className={styles.sliderimage}
              />
            </div>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default BrawlerSlider;


  

  