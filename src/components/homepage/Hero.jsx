import CommonBtn from "../common/CommonBtn";
import { HeadingBottom } from "../common/Icons";
import Paragraph from "../common/Paragraph";
import AnimatedHero from "./AnimatedHero";

const Hero = () => {
  return (
    <section className="section-x-gap relative pt-6 pb-4">
      <div className="max-w-[1165px] w-full mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 items-center gap-[27px]">
          <div className="flex max-lg:order-2 flex-col max-lg:items-center">
            <div className="w-fit max-lg:hidden max-lg:mx-auto rounded-[87px] border border-black/15 p-1.5">
              <div className="shadow-purple-inset w-full backdrop-blur-[11.8px] rounded-[57px] bg-white/5 py-1.5 sm:py-[10.2px] px-3.5 sm:px-5">
                <span className="font-normal text-sm sm:text-base !leading-[150%] tracking-normal text-nowrap text-black">
                  Trusted by 500+ Businesses
                </span>
              </div>
            </div>
            <h2
              className={`font-medium max-lg:hidden text-black max-lg:text-center max-lg:mx-auto max-w-[500px] sm:max-w-[558px] relative z-10 text-custom-3xl sm:text-4xl lg:text-5xl xl:text-custom-7xl !leading-[120%] tracking-normal mt-2`}
            >
              <span className={`relative inline-block`}>
                Empowering
                <span className="absolute bottom-0 left-0 w-full -z-10">
                  <HeadingBottom />
                </span>
              </span>
              &nbsp; Businesses with Innovative&nbsp;
              <span className={`relative inline-block`}>
                Tools
                <span className="absolute bottom-0 left-0 w-full -z-10">
                  <HeadingBottom />
                </span>
              </span>
            </h2>
            <Paragraph className="!text-davy-gray mt-4 max-lg:text-center max-lg:mx-auto max-w-[550px] lg:max-w-[475px]">
              DevHub is the maker of Dokan Multivendor, WP Project Manager, WP
              User Frontend, WP ERP and many more
            </Paragraph>
            <div className="flex max-custom-sm:flex-col max-custom-sm:w-full max-custom-sm:max-w-[400px] flex-wrap max-lg:justify-center items-center gap-2.5 mt-6 sm:mt-8">
              <CommonBtn className="max-custom-sm:!w-full max-custom-sm:!justify-center" variant="filled">Start Building</CommonBtn>
              <CommonBtn className="max-custom-sm:!w-full max-custom-sm:!justify-center" variant="outline">Discover Tools & Services</CommonBtn>
            </div>
          </div>
          <AnimatedHero />
        </div>
        <p className="font-bold text-2xl !leading-[120%] tracking-normal text-center mx-auto text-jaguar-black mt-12 sm:mt-14 md:mt-16 lg:mt-[70px]">
          We’re partners with
        </p>
      </div>
      <div className="absolute left-0 top-0 rounded-full gradient-blue w-[340px] h-[340px] opacity-50 blur-[250px]"></div>
    </section>
  );
};

export default Hero;
