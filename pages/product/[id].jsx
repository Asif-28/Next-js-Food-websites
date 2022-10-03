import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
export const Product = () => {
  const [size, setSize] = useState(0);
  const foodItem = {
    id: 1,
    img: "/img/f2.jpg",
    name: " Our Special ",
    price: [199, 299, 499],
    desc: "this is the special item avialable in out fooding corner ",
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <Image src={foodItem.img} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>{foodItem.name}</h1>
        <span className={styles.price}>Rs {foodItem.price[size]}</span>
        <p className={styles.desc}>{foodItem.desc}</p>
        <h3 className={styles.choose}>Choose the item quantity</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            {/* <Image src="/img/size.png" alt="" layout="fill" /> */}
            <button className={styles.btn}>Small</button>
          </div>
          <div className={styles.size}>
            {/* <Image src="/img/size.png" alt="" layout="fill" /> */}
            <button className={styles.btn} onClick={() => setSize(1)}>
              Medium
            </button>
            <span className={styles.number}>Best Deal!!</span>
          </div>
          <div className={styles.size}>
            <button className={styles.btn} onClick={() => setSize(2)}>
              Large
            </button>
          </div>
        </div>
        {/* <h3 className={styles.choose}>Choose The packing option </h3>
        <div className={styles.add}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="check"
              name=""
              className={styles.checkbox}
            />
          </div>
          <label htmlFor="check"> Environmental Friendly </label>
        </div> */}
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
