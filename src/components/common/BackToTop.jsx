"use client";
import { useEffect, useState } from "react";
import { ReviewSliderArrow } from "./Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [styleRight, setStyleRight] = useState(undefined);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const computeRight = () => {
      if (window.innerWidth < 640) {
        setStyleRight(undefined);
      } else {
        setStyleRight("max(calc((100vw - 1920px) / 2 + 24px), 24px)");
      }
    };
    computeRight();
    window.addEventListener("resize", computeRight);
    return () => window.removeEventListener("resize", computeRight);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 rotate-90 cursor-pointer flex w-10 h-10 sm:h-12 sm:w-12 items-center justify-center rounded-full gradient-blue duration-300 transition-all hover:scale-95 shadow-lg"
      style={styleRight ? { right: styleRight } : undefined}
      aria-label="Back to top"
    >
      <ReviewSliderArrow pathClass="fill-white" />
    </button>
  ) : null;
};

export default BackToTop;
