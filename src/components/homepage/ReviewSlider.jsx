"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewSliderArrow } from "../common/Icons";
import ReviewSliderCard from "./ReviewSliderCard";

const ReviewSlider = ({ data }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".review-next",
          prevEl: ".review-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {[...data, ...data].map((item, i) => (
          <SwiperSlide className="py-3 sm:py-5 px-2 lg:px-3" key={i}>
            <ReviewSliderCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="max-custom-xl:flex max-custom-xl:items-center max-custom-xl:space-x-4 max-custom-xl:justify-center max-sm:!mt-3 max-custom-xl:mt-6">
        <button className="review-prev -left-[72px] group review-slider-navigation">
          <ReviewSliderArrow pathClass="group-hover:fill-white  duration-300 transition-all" />
        </button>
        <button className="review-next -right-[72px] group rotate-180 review-slider-navigation">
          <ReviewSliderArrow pathClass="group-hover:fill-white  duration-300 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
