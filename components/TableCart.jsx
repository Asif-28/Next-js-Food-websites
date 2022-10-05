import Image from "next/image";
import styles from "../styles/Cart.module.css";
const TableCart = ({ name }) => {
  return (
    <table className={styles.table}>
      <tr className={styles.titleRow}>
        <th>Product</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr className={styles.items}>
        <td>
          {/* <span className={styles.id}>129837819237</span> */}
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
          <span className={styles.quantity}>Quantity</span>
        </td>
        <td>
          <span className={styles.total}>RS 390</span>
        </td>
      </tr>
    </table>
  );
};

export default TableCart;
