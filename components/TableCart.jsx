import Image from "next/image";
import styles from "../styles/Cart.module.css";
const TableCart = ({ cart }) => {
  var img, title;
  var extras = [];
  var extraOption = [];

  cart.products.map((product) => {
    img = product.img;
    title = product.title;
    extras = product.extraOptions;
  });
  // extras.map((i) => {
  //   extraOption = i.text;
  // });

  console.log(extras.text);
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
              src={img}
              alt=""
              className={styles.imgPro}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </td>
        <td>
          <span className={styles.name}>{title}</span>
        </td>
        <td>
          <span className={styles.extra}>{extraOption}</span>
        </td>
        <td>
          <span className={styles.quantity}>{cart.quantity}</span>
        </td>
        <td>
          <span className={styles.total}>{cart.total}</span>
        </td>
      </tr>
    </table>
  );
};

export default TableCart;
