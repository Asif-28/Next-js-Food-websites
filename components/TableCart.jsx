import Image from "next/image";
import styles from "../styles/Cart.module.css";
const TableCart = ({ cart }) => {
  return (
    <table className={styles.table}>
      <tr className={styles.titleRow}>
        <th>Product</th>
        <th>Name</th>
        <th>Extras</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr className={styles.items}>
        <td>
          <div className={styles.imgContainer}>
            <Image
              src="/img/f2.jpg"
              alt=""
              className={styles.imgPro}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </td>
        <td>
          <span className={styles.name}>Pan Fried</span>
        </td>
        <td>
          <span className={styles.extra}>sdfsdf</span>
        </td>
        <td>
          <span className={styles.quantity}>Quantity</span>
        </td>
        <td>
          <span className={styles.total}>RS 39.0</span>
        </td>
      </tr>
    </table>
  );
};

export default TableCart;
