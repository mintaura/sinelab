import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnersSlider = ({ data }) => {
  return (
    <Swiper
      className="partner-slider h-[100px]"
      modules={[Autoplay]}
      spaceBetween={16}
      loop
      freeMode
      speed={8000}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      slidesPerView={3}
      centeredSlides
      breakpoints={{
        640: { slidesPerView: 4, spaceBetween: 24 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 4, spaceBetween: 40 },
      }}
    >
      {[...data, ...data].map((item, index) => (
        <SwiperSlide
          key={index}
          className="!flex h-full items-center justify-center"
        >
          <div className="flex h-full w-full items-center justify-center">
            {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersSlider;
