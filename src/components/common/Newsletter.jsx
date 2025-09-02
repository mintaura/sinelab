import React from 'react'
import CommonBtn from './CommonBtn';
import { SecurityBadge } from './Icons';

const Newsletter = () => {
  return (
    <section className="section-x-gap relative z-10">
      <div className="custom-container">
        <div className="px-4 py-5 sm:p-7 md:p-8 lg:pt-[51px] lg:pb-11 lg:px-10 rounded-3xl gradient-blue border-4 flex flex-col items-center border-white shadow-light-blue -mt-[118px] custom-sm:-mt-[126px] sm:-mt-[142px] md:-mt-[156px] lg:-mt-[151px] translate-y-1/2">
          <span className="text-lg sm:text-xl md:text-2xl !leading-[130%] font-bold tracking-normal text-center text-white">
            Start Building Smarter Today
          </span>
          <h2 className="font-bold text-custom-xl custom-sm:text-custom-3xl sm:text-3xl md:text-4xl lg:text-custom-5xl text-white !leading-[130%] tracking-normal text-center mt-1 max-w-[300px] custom-sm:max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-full">
            Supercharge Your Workflow with DevHub Pro
          </h2>
          <CommonBtn className="mt-5" variant="white">
            Get Started Now
          </CommonBtn>
          <div className="flex items-center gap-2.5 sm:gap-3 mt-5">
            <SecurityBadge />
            <span className="font-normal text-sm sm:text-base !leading-[150%] tracking-normal text-white">
              Try DevHub Pro Platform Risk Free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter