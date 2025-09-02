"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersLogoSliderData } from "../common/Helper";

const PartnersLogoSlider = () => {
  return (
    <section className="pt-7 relative z-20 max-w-[1920px] w-full mx-auto">
      <Swiper
        className="partner-slider"
        modules={[Autoplay]}
        spaceBetween={16}
        loop
        freeMode
        speed={8000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        centeredSlides
        breakpoints={{
          500: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          900: { slidesPerView: 7 },
          1024: { slidesPerView: 8 },
          1200: { slidesPerView: 9 },
          1280: { slidesPerView: 10 },
        }}
      >
        {[...partnersLogoSliderData, ...partnersLogoSliderData].map(
          (item, index) => (
            <SwiperSlide
              key={index}
              className="!flex h-full items-center justify-center"
            >
              <div className="flex h-full min-w-[118px] w-full min-h-20 rounded-md border-[0.7px] border-iron/30 items-center justify-center">
                <Image
                  src={item}
                  width={102}
                  height={66}
                  alt={`Partner Logo ${index + 1}`}
                  className="object-contain w-fit h-fit"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default PartnersLogoSlider;
