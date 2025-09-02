"use client";
import "swiper/css";
import "swiper/css/autoplay";
import Heading from "../common/Heading";
import { partnersSliderData, reviewSliderData } from "../common/Helper";
import SectionTag from "../common/SectionTag";
import PartnersSlider from "./PartnersSlider";
import ReviewSlider from "./ReviewSlider";

const Testimonial = () => {
  return (
    <section className="pt-20 sm:pt-28 md:pt-[120px] lg:pt-[140px] xl:pt-[170px] mb-2 section-x-gap">
      <div className="custom-container">
        <SectionTag className="mb-2">Testimonial </SectionTag>
        <Heading blueText="partners say">What our exclusive</Heading>
        <div className="max-w-[430px] mx-auto w-full mt-8 sm:mt-10 relative">
          <PartnersSlider data={partnersSliderData} />
        </div>
        <div className="mt-4 sm:mt-5">
          <ReviewSlider data={reviewSliderData} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
