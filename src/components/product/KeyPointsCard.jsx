import { TickIcon } from "../common/Icons";

const KeyPointsCard = ({ points }) => {
  return (
    <article className="p-4 md:p-5 max-sm:max-w-[470px] max-md:max-w-[550px] max-md:mx-auto w-full lg:p-6 xl:p-8 review-card shadow-light-grey rounded-xl">
      <ul className="space-y-4 lg:space-y-6">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <TickIcon className="w-5 h-5" />
            <span className="text-base sm:text-lg lg:text-xl xl:text-custom-2xl !leading-[120%] tracking-normal font-normal text-cinder">{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default KeyPointsCard;
