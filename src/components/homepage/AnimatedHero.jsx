"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { animatedHeroFloatingItems } from "../common/Helper";
import { DevHubSingleLogo, HeadingBottom } from "../common/Icons";

const floatTransition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const AnimatedHero = () => {
  return (
    <div>
      <div className="w-fit lg:hidden max-lg:mx-auto rounded-[87px] border border-black/15 p-1.5">
        <div className="shadow-purple-inset w-full backdrop-blur-[11.8px] rounded-[57px] bg-white/5 py-1.5 sm:py-[10.2px] px-3.5 sm:px-5">
          <span className="font-normal text-sm sm:text-base !leading-[150%] tracking-normal text-nowrap text-black">
            Trusted by 500+ Businesses
          </span>
        </div>
      </div>

      <h2
        className={`font-medium text-black lg:hidden max-lg:text-center max-lg:mx-auto max-w-[500px] sm:max-w-[558px] relative z-10 text-custom-3xl sm:text-4xl lg:text-5xl xl:text-custom-7xl !leading-[120%] tracking-normal mt-2`}
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

      <div className="relative w-full max-w-[580px] h-[400px] sm:h-[500px] xl:h-[580px] mx-auto">
        {animatedHeroFloatingItems.map((item, i) => (
          <motion.div
            key={i}
            className={`${item.className} z-20`}
            initial={{ y: 0, rotate: 0 }}
            animate={{ y: [-8, 8], rotate: [-1, 1] }}
            transition={{
              duration: 4 + i * 0.5, // smoother & varied
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.3, // stagger start
            }}
          >
            <div
              className={`${item.padding} shadow-medium-gray bg-white w-fit relative rounded-2xl transition-all duration-300 overflow-hidden`}
            >
              <div className={`${item.iconSize}`}>
                <Image
                  src={item.src}
                  alt="app icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  unoptimized
                  className={`${item.iconSize}`}
                />
              </div>
              <div
                className={`${item.bgColor} w-8 h-8 rounded-full absolute -left-2 -bottom-2 opacity-90 blur-lg`}
              ></div>
            </div>
          </motion.div>
        ))}

        {/* Floating Icons with Framer Motion */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8] }}
          transition={floatTransition}
          className="absolute top-[35%] xs:top-[33%] custom-sm:top-1/3 custom-sm:-translate-y-1/3 left-[13%] custom-sm:left-[17%] sm:left-[15%] md:left-[10%] lg:left-[6%] rotate-[60deg] w-6 h-5"
        >
          <Image
            src="/assets/images/svg/gradient-ring-icon.svg"
            alt="app icon"
            width={24}
            height={20}
            unoptimized
          />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-7, 7] }}
          transition={floatTransition}
          className="absolute top-1/2 -translate-y-1/2 -right-[2%] xs:right-0 custom-sm:right-[10%] sm:right-[2%] xl:-right-[6%] w-20 h-20 object-cover"
        >
          <Image
            src="/assets/images/svg/two-ring-icon.svg"
            alt="app icon"
            width={28}
            height={32}
            unoptimized
            className="w-20 h-20 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8] }}
          transition={{ ...floatTransition, duration: 4 }}
          className="absolute z-10 bottom-1/4 -translate-y-1/4 custom-sm:bottom-1/5 custom-sm:-translate-y-1/5 sm:bottom-1/4 sm:-translate-y-1/4 xl:bottom-1/5 xl:-translate-y-1/5 -right-[8%] xs:-right-[5%] custom-sm:-right-[2%] sm:-right-[5%] md:-right-[10%] xl:-right-[15%] custom-xl:!-right-[20%] max-w-[130px] custom-sm:max-w-[200px] xl:max-w-[280px] w-full"
        >
          <Image
            src="/assets/images/svg/horizontal-vector.svg"
            alt="app icon"
            width={280}
            height={200}
            unoptimized
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8] }}
          transition={{ ...floatTransition, duration: 5 }}
          className="absolute bottom-[33%] xs:bottom-[30%] custom-sm:bottom-1/4 custom-sm:-translate-y-1/4 left-[6%] custom-sm:left-[17%] sm:left-[15%] md:left-[13%] lg:left-[6%] rotate-[240deg] w-6 h-5"
        >
          <Image
            src="/assets/images/svg/gradient-ring-icon.svg"
            alt="app icon"
            width={24}
            height={20}
            unoptimized
          />
        </motion.div>

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0.8, 1, 0.9, 1], // bounce effect
            opacity: [0, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden rounded-full px-1.5 pb-2"
        >
          <div className="relative bg-ghost-white w-32 h-32 xs:w-40 xs:h-40 xl:w-[280px] xl:h-[280px] rounded-full hero-logo-effect border border-black/5 flex items-center justify-center">
            <DevHubSingleLogo className="w-full max-w-[50px] xl:max-w-[70px] max-h-[100px]" />
            <div className="bg-aqua-blue/40 w-[100px] h-[100px] gradient-blue absolute left-[15%] bottom-[15%] blur-[110px]"></div>
          </div>
        </motion.div>

        {/* Concentric Circles */}
        <div className="absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] xs:w-[330px] xs:h-[330px] custom-sm:w-[385px] custom-sm:h-[385px] sm:w-[435px] sm:h-[435px] xl:w-[580px] xl:h-[580px] border border-black opacity-[4%] rounded-full" />
        <div className="absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] custom-sm:w-[310px] custom-sm:h-[310px] sm:w-[360px] sm:h-[360px] xl:w-[480px] xl:h-[480px] border border-black opacity-[6%] rounded-full" />
        <div className="absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] xs:w-[230px] xs:h-[220px] custom-sm:w-[235px] custom-sm:h-[235px] sm:w-[285px] sm:h-[285px] xl:w-[380px] xl:h-[380px] border border-black opacity-[8%] rounded-full" />
      </div>
    </div>
  );
};

export default AnimatedHero;
