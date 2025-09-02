import { SectionTagLines } from "./Icons";

const SectionTag = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 mx-auto w-fit text-center font-normal text-night-black text-sm sm:text-base !leading-[150%] tracking-normal ${className}`}>
      <SectionTagLines />
      {children}
      <SectionTagLines />
    </div>
  );
};

export default SectionTag;
