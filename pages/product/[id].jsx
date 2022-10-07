import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
export const Product = ({ productItem }) => {
  const [size, setSize] = useState(0);
  // const productItem = {
  //   id: 1,
  //   img: "/img/f2.jpg",
  //   title: " Our Special ",
  //   price: [199, 299, 499],
  //   desc: "this is the special item avialable in out fooding corner ",
  // };
  console.log(productItem);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={productItem.img}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>{productItem.title}</h1>
        <span className={styles.price}>Rs {productItem.price[size]}</span>
        <p className={styles.desc}>{productItem.desc}</p>
        <h3 className={styles.choose}>Choose the item quantity</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <button className={styles.btn}>Small</button>
          </div>
          <div className={styles.size}>
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
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.extraItems}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="soup"
              name="soup"
              className={styles.checkbox}
            />
            <label htmlFor="soup">Exta soup</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="sausage"
              name="sausage"
            />
            <label htmlFor="sausage">Special sausage</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="mayonnaise"
              name="mayonnaise"
            />
            <label htmlFor="mayonnaise">Extra mayonnaise</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      productItem: res.data,
    },
  };
};
export default Product;

{
  /* <h3 className={styles.choose}>Choose The packing option </h3>
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
        </div> */
}
