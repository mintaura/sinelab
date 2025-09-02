"use client";
import Image from "next/image";
import CommonBtn from "../common/CommonBtn";
import Heading from "../common/Heading";
import { servicesData } from "../common/Helper";
import Paragraph from "../common/Paragraph";
import SectionTag from "../common/SectionTag";
import ServiceCard from "./ServiceCard";

const Services = ({
  heading,
  headingBlueText,
  sectionTag,
  paragraph,
  cardsData,
  cardClass,
}) => {
  return (
    <section className="section-x-gap relative py-1 lg:py-6 xl:py-12 bg-alice-blue">
      <div className="custom-container text-center relative z-20">
        <SectionTag className="mb-2">{sectionTag}</SectionTag>
        <Heading blueTextClass="block" blueText={headingBlueText}>
          {heading}
        </Heading>
        <Paragraph className="text-center mx-auto mt-4 max-w-[568px]">
          {paragraph}
        </Paragraph>
        <div className="max-w-[894px] w-full gradient-blue-line mx-auto mt-7"></div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-7">
          {(cardsData ?? []).map((service, index) => (
            <ServiceCard
              cardClass={cardClass}
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
        <div className="max-w-[894px] w-full gradient-blue-line mx-auto mt-7"></div>
        <Paragraph className="mt-5 !text-davy-gray">
          {" "}
          It only takes 5 minutes to get started with DevHub Pro Platform
        </Paragraph>
        <CommonBtn className="mx-auto mt-[18px]" variant="filled">
          Get Started Now
        </CommonBtn>
      </div>
      <Image
        src="/assets/images/webp/curve-layer.webp"
        alt="layer"
        width={1502}
        height={329}
        className="w-full h-[200px] sm:h-[329px] lg:object-cover 2xl:object-top absolute -top-16 sm:-top-[100px] left-1/2 -translate-x-1/2"
        unoptimized
      />
      <Image
        src="/assets/images/webp/curve-layer.webp"
        alt="layer"
        width={1502}
        height={329}
        className="w-full h-[200px] sm:h-[329px] rotate-180 lg:object-cover 2xl:object-top absolute -bottom-16 sm:-bottom-[90px] left-1/2 -translate-x-1/2"
        unoptimized
      />
    </section>
  );
};

export default Services;
