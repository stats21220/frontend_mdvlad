import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./slider.module.css";
import { SliderProps } from "./slider.props";

export const Carousel = ({ className, ...props }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: styles.button__bar,
    arrows: false,
  };
  return (
    <div className={className} {...props}>
      <Slider {...settings}>
        <Image
          className={styles.slide}
          src={
            process.env.NEXT_PUBLIC_DOMAIN + `/static/1-slide/1-slide.1600.webp`
          }
          alt={"1"}
          height={471}
          width={1600}
        />
        <Image
          className={styles.slide}
          src={
            process.env.NEXT_PUBLIC_DOMAIN + `/static/2-slide/2-slide.1600.webp`
          }
          alt={"1"}
          height={471}
          width={1600}
        />
        <Image
          className={styles.slide}
          src={
            process.env.NEXT_PUBLIC_DOMAIN + `/static/3-slide/3-slide.1600.webp`
          }
          alt={"1"}
          height={471}
          width={1600}
        />
      </Slider>
    </div>
  );
};
