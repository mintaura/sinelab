import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Link from "next/link";

const ProductCard = ({ product, index }) => {
  return (
    <article
      key={index}
      className={`text-center bg-white max-custom-sm:max-w-[400px] flex flex-col items-center mx-auto p-3.5 md:p-5 w-full review-card hover:shadow-light-blue duration-300 transition-all rounded-xl`}
    >
      <Image
        src={product.img}
        alt={product.title}
        width={70}
        height={70}
        unoptimized
        className="w-[70px] h-[70px]"
      />
      <h3 className="font-bold text-base !leading-[100%] tracking-normal text-black mt-6 lg:mt-8 py-0.5">
        {product.title}
      </h3>
      <Paragraph className="mt-4 lg:mt-5 mx-auto text-center !text-black/80">
        {product.desc}
      </Paragraph>
      <Link
        href="#"
        className="font-bold text-base duration-300 transition-all hover:text-butterfly-blue !leading-[100%] tracking-normal text-black mt-5 lg:mt-5 py-0.5"
      >
        Learn More {">>"}
      </Link>
    </article>
  );
};

export default ProductCard;
