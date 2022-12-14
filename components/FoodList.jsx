import styles from "../styles/FoodList.module.css";
import { FoodCard } from "./FoodCard";

const FoodList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best food in the town of kolkata</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        reprehenderit in excepturi tempora obcaecati adipisci molestias error
        modi laudantium fugiat!
      </p>
      <div className={styles.wrapper}>
        {productList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
