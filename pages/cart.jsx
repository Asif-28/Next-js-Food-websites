import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Table from "../components/Table";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
// import TableCart from "../components/TableCart";

const TableCart = dynamic(import("../components/TableCart"), {
  ssr: false,
});
export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <TableCart cart={cart} />
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.total}>CART TOTAL</h2>
          <div className={styles.totalItm}>
            <b className={styles.totslItmTitle}> SubTotal:</b> Rs 3980.0
          </div>
          <div className={styles.totalItm}>
            <b className={styles.totslItmTitle}> Discount:</b> Rs 0.0
          </div>
          <div className={styles.totalItm}>
            <b className={styles.totslItmTitle}> Total:</b> Rs 398.0
          </div>
          <button className={styles.button}>CHECKOUT NOW!!</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

{
  /* <div className={styles.table}>
          <ul className={styles.ul}>
            <li className={styles.li}>Product</li>
            <li className={styles.li}>Name</li>
            <li className={styles.li}>Price</li>
            <li className={styles.li}>Quantity </li>
            <li className={styles.li}>Total</li>
          </ul>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/f2.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </li>
            <li className={styles.li}>
              <span className={styles.name}>SPECIAL</span>
            </li>

            <li className={styles.li}>
              <span className={styles.price}>Rs199</span>
            </li>
            <li className={styles.li}>
              <span className={styles.quantity}>2</span>
            </li>
            <li className={styles.li}>
              <span className={styles.total}>Rs398</span>
            </li>
          </ul>
        </div> */
}
