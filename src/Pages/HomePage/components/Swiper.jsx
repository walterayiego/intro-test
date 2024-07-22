import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperjs.css";

// import required modules
import { Pagination, Navigation, Thumbs, Autoplay } from "swiper/modules";

const slides = ["1", "2", "3", "4"];

export default function App() {
  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<div class="bg-primary select-none swiper-pagination-bullet">' +
            " " +
            "</div>"
          );
        },
      }}
      style={{
        "--swiper-navigation-color": "#2020c310",
        "--swiper-pagination-color": "#2020c310",
      }}
      navigation={true}
      speed={100}
      parallax={true}
      autoplay={true}
      modules={[Pagination, Navigation, Thumbs, Autoplay]}
      className="mySwiper "
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
