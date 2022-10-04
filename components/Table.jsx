import styles from "../styles/Order.module.css";
const Table = ({ name }) => {
  return (
    <table className={styles.table}>
      <tr className={styles.trTitle}>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Address</th>
        <th>Total</th>
      </tr>
      <tr className={styles.tr}>
        <td>
          <span className={styles.id}>129837819237</span>
        </td>
        <td>
          <span className={styles.name}>{name}</span>
        </td>
        <td>
          <span className={styles.address}>Aloklata 4bc</span>
        </td>
        <td>
          <span className={styles.total}>RS 500</span>
        </td>
      </tr>
    </table>
  );
};

export default Table;
