import Image from "next/image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import SectionTag from "../common/SectionTag";
import { DotEllipse } from "../common/Icons";

const TechnologyShowcase = () => {
  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-24 xl:pt-[120px] xl:pb-[140px] section-x-gap">
      <div className="max-w-[943px] mx-auto w-full relative z-20">
        <SectionTag className="mb-2">Technology showcase</SectionTag>
        <Heading blueText="Smart tools," endingText="powering real impact" />
        <Paragraph className="max-w-[641px] mx-auto text-center mt-4">
          succinctly communicates their focus on real‑world solutions built for
          performance and results.
        </Paragraph>
        <div className="relative w-fulls aspect-[943/532] mt-10 sm:mt-[50px] max-sm:hidden">
          <Image
            src="/assets/images/webp/technology-showcase.webp"
            alt="showcase"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative w-fulls aspect-[427/504] mt-10 sm:mt-[50px] sm:hidden">
          <Image
            src="/assets/images/webp/technology-showcase-mobile.webp"
            alt="showcase"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="absolute z-0 -left-[74px] -top-10 sm:top-0 rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] rotate-[28deg]"></div>
      <div className="absolute z-0 left-3 sm:left-5 lg:left-[34px] -top-10 sm:top-0">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
      <div className="absolute z-0 -right-[74px] bottom-10 sm:bottom-16 rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] -rotate-[28deg]"></div>
      <div className="absolute z-0 right-3 sm:right-5 md:right-5 lg:right-[34px] bottom-10 sm:bottom-16">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
    </section>
  );
};

export default TechnologyShowcase;
