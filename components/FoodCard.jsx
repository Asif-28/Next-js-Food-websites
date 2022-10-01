import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
export const FoodCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h3 className={styles.title}>meduim size</h3>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <p className={styles.price}>Rs 299</p>
    </div>
  );
};
