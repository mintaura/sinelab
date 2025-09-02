import CommonBtn from "@/components/common/CommonBtn";

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-ghost-white text-center px-4">
      <div className="flex flex-col items-center relative z-20">
        <h1 className="text-5xl sm:text-6xl gradient-blue-text mb-3 sm:mb-4 font-bold">
          404
        </h1>
        <p className="text-lg sm:text-xl mb-5 sm:mb-6 text-davy-gray">
          Sorry, we couldn&#39;t find that page.
        </p>
        <div className="relative z-20 bg-ghost-white/50 rounded-full">
          <CommonBtn href="/" variant="filled">
            Return to Home
          </CommonBtn>
        </div>
      </div>
      <div className="absolute -top-[10%] -left-[10%] w-[300px] h-[300px] gradient-blue opacity-35 blur-[100px] rotate-[30deg]"></div>
      <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] gradient-blue opacity-35 blur-[100px] rotate-[-30deg]"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[300px] h-[300px] gradient-blue opacity-35 blur-[100px] rotate-[30deg]"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[300px] h-[300px] gradient-blue opacity-35 blur-[100px] rotate-[-30deg]"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] gradient-blue opacity-35 blur-[200px]"></div>
    </div>
  );
}
