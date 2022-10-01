import styles from "../styles/FoodList.module.css";
import { FoodCard } from "./FoodCard";

const FoodList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best food in the town of kolkata</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        reprehenderit in excepturi tempora obcaecati adipisci molestias error
        modi laudantium fugiat!
      </p>
      <div className={styles.wrapper}>
        <FoodCard />
        {/* <FoodCard /> */}
      </div>
    </div>
  );
};

export default FoodList;
