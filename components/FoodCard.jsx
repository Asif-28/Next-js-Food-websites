import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
export const FoodCard = () => {
  const data = [
    {
      id: 1,
      img: "/img/pizza.png",
      title: "Small size ",
      desc: "the best small size pizza with extra cheese and toppings ",
      price: "Rs 149 ",
    },
    {
      id: 2,
      img: "/img/pizza.png",
      title: "Medium Size  ",
      desc: "the best Medium  size pizza with extra cheese and toppings ",
      price: "Rs 199",
    },
    {
      id: 3,
      img: "/img/pizza.png",
      title: " Pan size ",
      desc: "the best pan  size pizza with extra cheese and toppings ",
      price: "Rs 99 ",
    },
    {
      id: 4,
      img: "/img/pizza.png",
      title: "Large size ",
      desc: "the best large  size pizza with extra cheese and toppings ",
      price: "Rs 499",
    },
    // {
    //   id: 5,
    //   img: "/img/pizza.png",
    //   title: "Large size ",
    //   desc: "the best large  size pizza with extra cheese and toppings ",
    //   price: "Rs 499",
    // },
    // {
    //   id: 6,
    //   img: "/img/pizza.png",
    //   title: "Large size ",
    //   desc: "the best large  size pizza with extra cheese and toppings ",
    //   price: "Rs 499",
    // },
  ];
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.imgContainer} key={item.id}>
            <Image src={item.img} alt="" width="500" height="500" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span style={{ textDecoration: "underline" }}>{item.price}</span>
          </div>
        );
      })}
    </div>
  );
};
