import Heading from "../common/Heading";
import { cardOnePoints, cardTwoPoints } from "../common/Helper";
import SectionTag from "../common/SectionTag";
import KeyPointsCard from "./KeyPointsCard";

const KeyPoints = () => {
  return (
    <section className="section-x-gap pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[140px] pt-20 sm:pt-28 md:pt-[120px] lg:pt-[140px] xl:pt-[170px]">
      <div className="custom-container">
        <SectionTag className="mb-2">Key points</SectionTag>
        <Heading blueText="Capabilities">Key Features &</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8 sm:mt-[42px]">
          {[cardOnePoints, cardTwoPoints].map((points, idx) => (
            <KeyPointsCard key={idx} points={points} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
