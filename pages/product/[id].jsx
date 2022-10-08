import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
export const Product = ({ productItem }) => {
  const [size, setSize] = useState(0);
  const [options, setOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(productItem.price[0]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const onChangeSize = (sizeIndex) => {
    const diff = productItem.price[sizeIndex] - productItem.price[size];
    setSize(sizeIndex);
    changePrice(diff);
  };
  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setOptions((prev) => [...prev, item]);
    } else {
      changePrice(-item.price);
      setOptions(options.filter((option) => option._id != item._id));
    }
  };
  // console.log(productItem);
  const handleClick = () => {
    dispatch(addProduct({ ...productItem, quantity, options, price }));
    console.log(price);
  };
  // console.log(productItem);
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
        <span className={styles.price}>Rs {price}</span>
        <p className={styles.desc}>{productItem.desc}</p>
        <h3 className={styles.choose}>Choose the item quantity</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => onChangeSize(0)}>
            <button className={styles.btn}>Small</button>
          </div>
          <div className={styles.size}>
            <button className={styles.btn} onClick={() => onChangeSize(1)}>
              Medium
            </button>
            <span className={styles.number}>Best Deal !!</span>
          </div>
          <div className={styles.size}>
            <button className={styles.btn} onClick={() => onChangeSize(2)}>
              Large
            </button>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional items</h3>
        <div className={styles.extraItems}>
          {productItem.extraOptions.map((item) => (
            <div className={styles.option} key={item._id}>
              <input
                type="checkbox"
                id={item.text}
                name={item.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, item)}
              />
              <label htmlFor="soup">{item.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.btn} onClick={handleClick}>
            Add to cart
          </button>
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
