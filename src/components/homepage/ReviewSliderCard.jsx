import Image from "next/image";
import { ReviewStars } from "../common/Icons";
import Paragraph from "../common/Paragraph";

const ReviewSliderCard = ({ item }) => {
  return (
    <article className="bg-white review-card duration-300 transition-all hover:shadow-light-grey rounded-xl p-5 lg:pl-7 lg:pr-8 lg:pt-7 lg:pb-[34px]">
      <ReviewStars />
      <Paragraph className="mt-5 !text-davy-gray">{item.text}</Paragraph>
      <div className="flex items-center mt-6 gap-3">
        <Image
          src={item.img}
          alt={item.name}
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 min-w-12 min-h-12 object-center"
        />
        <div>
          <h4 className="font-bold text-lg !leading-[140%] tracking-normal text-black">
            {item.name}
          </h4>
          <span className="text-sm !leading-[150%] font-normal tracking-normal text-black mt-px">
            {item.role}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ReviewSliderCard;
