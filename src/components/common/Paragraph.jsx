
const Paragraph = ({ children, className = "" }) => {
  return (
    <p
      className={`${className} font-normal text-base !leading-[150%] tracking-normal text-black/70`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
