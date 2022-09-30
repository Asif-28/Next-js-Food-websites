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
  const slides = ["/img/screen1.jpg", "/img/screen3.jpg", "/img/screen2.jpeg"];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((i) => {
        return (
          <SwiperSlide className="slide-items" key={i}>
            <div className={styles.container} style={{}}>
              <Image src={i} alt="" layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Features;
