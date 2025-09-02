import { HeadingBottom } from "./Icons";

const Heading = ({
  children,
  blueText = "",
  className = "",
  blueTextClass = "",
  endingText = "",
}) => {
  return (
    <h2
      className={`${className} font-bold text-black relative z-10 text-custom-3xl sm:text-4xl lg:text-5xl !leading-[120%] tracking-normal text-center`}
    >
      {children}&nbsp;
      <span
        className={`gradient-blue-text relative inline-block ${blueTextClass}`}
      >
        {blueText}
        <span className="absolute bottom-0 left-0 w-full -z-10">
          <HeadingBottom />
        </span>
      </span>
      {endingText && <span>&nbsp;{endingText}</span>}
    </h2>
  );
};

export default Heading;
