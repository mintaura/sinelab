import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { productServicesData } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/common/Newsletter";
import Services from "@/components/homepage/Services";
import Hero from "@/components/product/Hero";
import KeyPoints from "@/components/product/KeyPoints";

export const metadata = {
  title: "DevHub | Multivendor Pro",
  description:
    "Turn your WordPress site into a complete multi-vendor marketplace with DevHub’s Multivendor Pro (Dokan Pro). Manage vendors, handle commissions, and build an Amazon or eBay-style store with advanced features and seamless WooCommerce integration.",
  openGraph: {
    images: ["https://i.ibb.co/C5C1PpNH/product-seo.png"],
  },
  twitter: {
    images: ["https://i.ibb.co/C5C1PpNH/product-seo.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services
        heading="What’s so Special About"
        headingBlueText="DevHub Pro Platform"
        sectionTag="Our Services"
        paragraph="We help small businesses around the world with amazing products that
          solve their business and web problems. weDevs is special because -"
        cardsData={productServicesData}
        cardClass="!max-w-[284px]"
      />
      <KeyPoints />
      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  );
}
