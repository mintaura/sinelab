import React from 'react'
import Paragraph from '../common/Paragraph';

const ServiceCard = ({ service, index, cardClass }) => {
  return (
    <article
      key={index}
      className={`text-center flex flex-col items-center mx-auto p-4 w-full ${cardClass} ${
        index === 0 ? "sm:max-w-[295px] lg:max-w-[196px]" : " sm:max-w-[295px]"
      }`}
    >
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-xl icon-box border border-aqua-blue">
        {service.icon}
      </div>
      <h3 className="font-bold text-2xl !leading-[120%] tracking-normal text-black mt-6">
        {service.title}
      </h3>
      <Paragraph className="mt-2 mx-auto text-center !text-davy-gray">
        {service.desc}
      </Paragraph>
    </article>
  );
};

export default ServiceCard