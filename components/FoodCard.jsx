import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
export const FoodCard = () => {
  const data = [
    {
      id: 1,
      img: "/img/f1.jpg",
      title: "Small size ",
      desc: "the best small size pizza with extra cheese and toppings ",
      price: "Rs 149 ",
    },
    {
      id: 2,
      img: "/img/f2.jpg",
      title: "Medium Size  ",
      desc: "the best Medium  size pizza with extra cheese and toppings ",
      price: "Rs 199",
    },
    {
      id: 3,
      img: "/img/f3.jpg",
      title: " Pan size ",
      desc: "the best pan  size pizza with extra cheese and toppings ",
      price: "Rs 99 ",
    },
    {
      id: 4,
      img: "/img/f4.jpg",
      title: "Large size ",
      desc: "the best large  size pizza with extra cheese and toppings ",
      price: "Rs 499",
    },
    {
      id: 5,
      img: "/img/f5.jpg",
      title: "Extra Large size ",
      desc: "the pizza Extra large size  with extra cheese and toppings ",
      price: "Rs 699",
    },
    {
      id: 6,
      img: "/img/f6.jpg",
      title: "Special size  ",
      desc: "the best special size  pizza with extra cheese and toppings ",
      price: "Rs 999",
    },
  ];
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.imgContainer} key={item.id}>
            <Image
              style={{ borderRadius: "12px" }}
              className={styles.image}
              src={item.img}
              alt=""
              width="600"
              height="500"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span style={{ textDecoration: "underline" }}>{item.price}</span>
          </div>
        );
      })}
    </div>
  );
};
