import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtnImg}>
          <Image src="/img/telephone.png" alt="" height="30" width="30" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now </div>
          <div className={styles.text}> +91 6786 6786</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.product}>
          <li className={styles.productList}> Homepage</li>
          <li className={styles.productList}> Menu</li>
          <div className={styles.logo}> foodiijzz</div>

          <li className={styles.productList}>Contact</li>
          <li className={styles.productList}>Event</li>
          <li className={styles.productList}>Blog</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/img/cart.png"
            className={styles.cartImg}
            alt=""
            height="30 "
            width="30 "
          />
          <div className={styles.counterBtn}> 2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
