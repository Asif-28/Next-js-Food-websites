import styles from "../../styles/Order.module.css";
import Image from "next/image";
const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.r1}>
          <div className={styles.table}>
            <ul className={styles.ul}>
              <li className={styles.li}>Order ID</li>
              <li className={styles.li}>Customer</li>
              <li className={styles.li}>Address</li>
              <li className={styles.li}>Total </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span className={styles.id}>345664556798</span>
              </li>

              <li className={styles.li}>
                <span className={styles.name}>Asif Ali</span>
              </li>
              <li className={styles.li}>
                <span className={styles.address}>Aloklata 4BC</span>
              </li>
              <li className={styles.li}>
                <span className={styles.total}>Rs398</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.r2}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.total}>CART TOTAL</h2>
          <div className={styles.totalItm}>
            <b className={styles.totalItmTitle}> SubTotal:</b> Rs 3980.0
          </div>
          <div className={styles.totalItm}>
            <b className={styles.totalItmTitle}> Discount:</b> Rs 0.0
          </div>
          <div className={styles.totalItm}>
            <b className={styles.totalItmTitle}> Total:</b> Rs 398.0
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
