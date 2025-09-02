import Link from "next/link";
import { BlackRightArrow, GradientRightArrow, WhiteRightArrow } from "./Icons";

const CommonBtn = ({
  children,
  variant = "filled",
  className = "",
  href = "",
}) => {
  const baseStyles =
    "text-base font-medium flex items-center outline-none gap-2 w-fit !leading-[100%] cursor-pointer group tracking-normal rounded-[100px] duration-300 transition-all px-5 sm:px-6 md:px-7";

  const variantStyles = {
    filled:
      "text-white gradient-blue-button py-3 sm:py-4 bg-white relative overflow-hidden z-0",
    outline:
      "text-black border border-black bg-transparent py-[11.2px] sm:py-[15.2px] hover:bg-black hover:text-white",
    white: "bg-white py-3 sm:py-4 relative overflow-hidden z-0",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}  ${className}`}
    >
      <span className={variant === "white" ? "gradient-blue-text" : ""}>
        {children}
      </span>

      <span className="group-hover:translate-x-1 transition-all duration-300">
        {variant === "filled" && (
          <WhiteRightArrow pathClass="group-hover:fill-butterfly-blue duration-300 transition-all" />
        )}
        {variant === "outline" && (
          <BlackRightArrow pathClass="group-hover:fill-white duration-300 transition-all" />
        )}
        {variant === "white" && <GradientRightArrow />}
      </span>
    </Link>
  );
};

export default CommonBtn;
