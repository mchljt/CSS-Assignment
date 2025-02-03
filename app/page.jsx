/* page.jsx / Landing page by Tay King Yu, Galen*/
//Added Hero video
//Added Automated slider 
//Added arrow down for auto scroll
//Made page somewhat reactive

import styles from "./page.module.css"
import HeroVideo from "./ui/page-components/HeroVideo/HeroVideo";
import Container from "react-bootstrap/Container";
import fonts from "./ui/fonts.css"; //Import for custom font 
import BrawlerSlider from "./ui/page-components/BrawlerSlider/BrawlerSlider";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <HeroVideo />
      <div>
      <Container fluid className={`${styles.Container}`}>
        <BrawlerSlider />
        <div className={`d-flex justify-content-start`}>
          <Container>
            <Image
              alt="Phone and screenshot"
              src="/media/edited-phone-image.png" /* image = https://wall.alphacoders.com/big.php?i=1279154 */
              height={1200}
              width={1200}
              className={`${styles.phonepos} `}
            />
          </Container>
          <Container className={`pe-5 me-4 mt-5 pt-5`}>
            <h1 className={styles.listHeader}> 
              Discover the excitement at your fingertips with BrawlHub! 🚀
            </h1>
            <br />
            <h3>
              <ul>
              <li className={styles.listItem}>🗺️ Map Mayhem: Navigate strategic maps like a pro.</li>
              <br />
              <li className={styles.listItem}> 🤖 Brawler Mystery: Find our more about the different brawlers</li>
              <br />
              <li className={styles.listItem}>🧠 Memory Challenge: Test your memory with our mini-game.</li>
              </ul>
            </h3>
         
          </Container>
        </div>
      </Container>
      </div>

    </>
  );
}

  

