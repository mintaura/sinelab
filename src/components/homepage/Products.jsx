import Image from "next/image";
import CommonBtn from "../common/CommonBtn";
import Heading from "../common/Heading";
import { productData } from "../common/Helper";
import { DotEllipse } from "../common/Icons";
import Paragraph from "../common/Paragraph";
import SectionTag from "../common/SectionTag";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="relative section-x-gap pt-12 sm:pt-14 md:pt-16 lg:pt-24 pb-20 sm:pb-28 md:pb-[120px] lg:pb-[140px] xl:pt-[162px] xl:pb-[170px]">
      <div className="custom-container relative z-20">
        <div className="max-w-[612px] mx-auto">
          <SectionTag className="mb-2">Our Products</SectionTag>
          <Heading blueText="Solution">Our</Heading>
          <Paragraph className="mx-auto text-center mt-4">
            With our innovative tools and solutions tailored to empower your
            business, you just need to sit back and see your problems solved,
            business operations accelerated and team productivity boosted.
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 custom-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5 mt-8 sm:mt-10 md:mt-12">
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
        <CommonBtn className="mt-[42px] mx-auto">View All Products</CommonBtn>
      </div>
      <div className="absolute z-0 -left-[74px] top-14 md:top-20 rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] rotate-[28deg]"></div>
      <div className="absolute z-0 left-3 sm:left-5 lg:left-[34px] top-14 md:top-20">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
      <div className="absolute z-0 -right-[74px] bottom-14 sm:bottom-24 rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] -rotate-[28deg]"></div>
      <div className="absolute z-0 right-3 sm:right-5 md:right-5 lg:right-[34px] bottom-14 sm:bottom-24">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
    </section>
  );
};

export default Products;
