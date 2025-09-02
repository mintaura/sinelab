import Image from "next/image";
import CommonBtn from "../common/CommonBtn";
import { HeadingBottom } from "../common/Icons";

const Hero = () => {
  return (
    <section className="relative section-x-gap pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 pb-20 sm:pb-28 md:pb-[120px] lg:pb-[140px] xl:pb-[170px]">
      <div className="max-w-[1440px] w-full mx-auto relative">
        <div className="custom-container relative z-20">
          <div className="flex flex-col max-md:items-center max-md:mx-auto max-w-[550px] sm:max-w-[650px] lg:max-w-[764px] w-full">
            <div>
              <div className="cart-circle max-md:mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] rounded-full shadow-white-medium-inset flex justify-center items-center mb-4 sm:mb-6">
                <Image
                  src="/assets/images/webp/silver-cart-logo.webp"
                  unoptimized
                  alt="cart"
                  width={50}
                  height={50}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]"
                />
              </div>
              <h2
                className={`font-medium max-md:mx-auto max-md:text-center text-black md:max-w-[300px] lg:max-w-[400px] xl:max-w-[558px] relative z-10 text-custom-3xl sm:text-4xl lg:text-5xl xl:text-custom-7xl !leading-[120%] tracking-normal`}
              >
                <span className={`relative inline-block gradient-blue-text`}>
                  DevHub
                  <span className="absolute bottom-0 left-0 w-full -z-10">
                    <HeadingBottom />
                  </span>
                </span>{" "}
                Multivendor Pro
              </h2>
              <p className="text-base md:max-w-[300px] max-md:text-center max-md:mx-auto lg:max-w-full lg:text-lg xl:text-2xl !leading-[120%] tracking-normal text-davy-gray font-normal mt-4 mb-5 sm:mb-6 md:my-[30px]">
                Complete Multi-Vendor Marketplace Solution
              </p>
              <div className="max-w-[470px] md:hidden sm:max-w-[520px] max-h-[430px] w-full h-full relative">
                <Image
                  src="/assets/images/webp/product-hero-mobile-image.webp"
                  alt="Product Hero"
                  width={621}
                  height={430}
                  className="w-full h-full"
                  unoptimized
                  priority
                />
                <div className="absolute top-10 rounded-tr-full rounded-br-full left-10 w-16 h-16 sm:w-28 sm:h-28 bg-ghost-white blur-2xl"></div>
                <div className="absolute opacity-95 top-0 -left-5 w-10 sm:w-16 h-full bg-ghost-white blur-lg"></div>
                <div className="absolute opacity-95 left-0 -bottom-5 h-10 sm:h-16 w-full bg-ghost-white blur-lg"></div>
                <div className="absolute opacity-95 right-0 -top-5 w-full h-10 sm:h-16 bg-ghost-white blur-lg"></div>
                <div className="absolute opacity-95 bottom-0 -right-5 w-10 sm:w-16 h-full bg-ghost-white blur-lg"></div>
              </div>
              <CommonBtn
                className="max-md:mx-auto max-md:hidden"
                variant="filled"
              >
                Most Popular Choice
              </CommonBtn>
            </div>
            <p className="text-base lg:text-lg xl:text-2xl max-md:text-center max-md:mx-auto !leading-[120%] tracking-normal mt-[30px] font-normal text-davy-gray">
              Transform your WordPress website into a powerful multi-vendor
              marketplace like Amazon or eBay. Dokan Pro provides everything you
              need to manage vendors, handle commissions, and create a
              successful online marketplace with advanced features and seamless
              WooCommerce integration.
            </p>
            <CommonBtn
              className="max-md:mx-auto md:hidden mt-6"
              variant="filled"
            >
              Most Popular Choice
            </CommonBtn>
          </div>
        </div>
        <Image
          src="/assets/images/webp/product-hero-image.webp"
          alt="Product Hero"
          width={935}
          height={469}
          className="absolute max-md:hidden -top-12 -right-10 xl:right-10 z-10 max-w-[800px] lg:max-w-[935px] max-h-[469px] w-full h-full"
          unoptimized
          priority
        />
      </div>
      <div className="absolute z-0 top-0 left-0 rounded-full gradient-blue w-[340px] h-[340px] opacity-50 blur-[250px]"></div>
    </section>
  );
};

export default Hero;
