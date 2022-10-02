// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card1}>
          <h2>YES!!! WE DID IT. </h2>
          <p>
            WE MADE THE AMAZING FOOD. YOU ARE ALWAYS WELCOME TO OUR RESTURANT.
          </p>
          <p> YOU WILL NEVER GET DIAPPOINTED!!!</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card2}>
          <h3>FIND OUR FOOD CENTER</h3>
          <p>123 , XYZ Kolkata 70010889 West Bengal</p>
          <p>785 , ABC Ranchi 84887678 Jharkhand</p>
          <p>33 , GHT Patna 78989899 Bihar</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card3}>
          <h3>WORKING HOURS</h3>
          <p>MONDAY TO FRIDAY </p>
          <p>9:00-22:00</p>
          <p>SATURDAY - SUNDAY </p>
          <p>12:00-24:00</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
