/* Maps page by Teo Hong Rui Freddy*/
"use client";

import styles from "./page.module.css";
import Buttons from "./Components/Buttons";
import React from "react";
import useSWR from "swr";
import fonts from "../ui/fonts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sections from "./Components/Sections";


function Banner() {
  return (
      <div className={`${styles.banner}`}>
          <img src="/media/Background.jpg"></img>
          <div className={`${styles.bannertext}`}>
              <div className={`${styles.whitebox}`}>
                  <h1>Maps</h1>
                  <p>Navigate your way to victory!</p>
              </div>
          </div>
      </div>
  )
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Maps() {
    const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);

    if (error) return <div>Failed to load maps</div>;
    if (!data) return <div>Loading...</div>;

    return (
      <>
      <Banner/>
      <Sections />
        <div className={`${styles.maps_title}`}>
                <h1>All Maps</h1>
            </div><div className={`${styles.Container}`}>
                <div className={`${styles.maps_container}`}>
                    {data.list.map((item, i) => (
                        <div key={i} className={`${styles.maps_item}`}>
                            <h1 className={`${styles.maps_name}`}>{item.name}</h1>
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
      )
    }
