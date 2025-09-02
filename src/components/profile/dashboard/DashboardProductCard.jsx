import Image from "next/image";

const DashboardProductCard = ({ p }) => {
  return (
    <article className="flex rounded-xl bg-white items-center gap-4 p-2 review-card shadow-light-grey duration-300 transition-all">
      <div className="bg-alice-blue p-1 rounded-md min-w-[54px] max-w-[54px] max-h-[54px] min-h-[54px] flex justify-center items-center">
        <Image
          width={44}
          height={34}
          src={p.logo}
          alt={p.name}
          className="w-full h-full max-w-[44px] max-h-[34px] object-contain"
        />
      </div>
      <span className="text-base !leading-[100%] tracking-normal text-black font-bold">
        {p.name}
      </span>
    </article>
  );
};

export default DashboardProductCard;
