/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import Image from "gatsby-image"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

interface Props {
  images: DetailsImages;
}

const Smartphone: React.FC<Props> = ({ images }) => {
  const smartphoneRef = useRef<HTMLDivElement>(null!);
  const next = useRef<HTMLDivElement>(null!);
  const prev = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    gsap.from(smartphoneRef.current, {
      duration: 1.5,
      delay: 0.5,
      opacity: 0,
      y: -50,
      ease: Power3.easeInOut,
    });
    gsap.to([next.current,prev.current],{
      opacity:1,
      delay:0.5,
      duration:2,
      ease: Power3.easeInOut,
    })
  });

  const renderSlides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <Image
          loading="lazy"
          fluid={image.childImageSharp.fluid}
          className="smartphone-img"
          alt="projectImage"
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <div ref={smartphoneRef} className="smartphone">
        <div className="content">
          <Swiper
            updateOnWindowResize={false}
            autoHeight={true}
            children={renderSlides}
            effect="fade"
            loop={true}
            navigation={{
              nextEl: ".smartphone-next",
              prevEl: ".smartphone-prev",
            }}
          />
        </div>
      </div>
      <div ref={next} className="smartphone-nav smartphone-next">
        <FaArrowRight />
      </div>
      <div ref={prev} className=" smartphone-nav smartphone-prev">
        <FaArrowLeft />
      </div>
    </>
  );
};

export default Smartphone;
