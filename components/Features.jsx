import styles from "../styles/Features.module.css";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
// import "swiper/swiper-bundle.css";
// import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const Features = () => {
  const slides = [
    {
      img: "/img/screen1.jpg",
      id: 1,
      text: " WELCOME TO OUR FOODING CORNER",
      para: "loredfm ipsum dolor sit amet,  gh d, dsfgdfs, sgdfg df fdgdfg  dfgdfgsd,d gsdfgsdgsdg,consec fghtetur sd fsd adipsdfdssicing",
    },
    {
      img: "/img/screen3.jpg",
      id: 2,
      text: " WE PROVIDE THER BEST FOODING EXPERIENCE ",
      para: "lorem ipsum dolor gdfg dfgdfg gdfgdf dfgfdgf sit amet, consectetur sdfsdfsd adipisicing",
    },
    {
      img: "/img/screen2.jpeg",
      id: 3,
      text: "ALL TYPES OF DISHES ARE AVAILABLE HERE ",
      para: "lorsdfem ipsum dolor  dfgdfg gghfgh dfhh hgsdfg gdfgfdg sit amet, consectetur sdfsdfsdf adipisicing ",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      // cssMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((i) => {
        return (
          <SwiperSlide className={styles.slider} key={i.id}>
            <div className={styles.container} style={{}}>
              <Image
                className={styles.imgContainer}
                src={i.img}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.texts}>
                <h1
                  style={{
                    zIndex: "3",
                    fontSize: "3rem",
                    maxWidth: "70vw",
                    fontFamily: "cursive",
                    color: "yellow",
                  }}
                >
                  {i.text}
                </h1>
                <p className={styles.para}>{i.para} </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Features;
