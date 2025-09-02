import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { servicesData } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/common/Newsletter";
import Hero from "@/components/homepage/Hero";
import PartnersLogoSlider from "@/components/homepage/PartnersLogoSlider";
import Products from "@/components/homepage/Products";
import Services from "@/components/homepage/Services";
import TechnologyShowcase from "@/components/homepage/TechnologyShowcase";
import Testimonial from "@/components/homepage/Testimonial";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-ghost-white">
        <Navbar />
        <Hero />
      </div>
      <PartnersLogoSlider />
      <Products />
      <Services
        heading="What’s so Special About"
        headingBlueText="DevHub Pro Platform"
        sectionTag="Our Services"
        paragraph="We help small businesses around the world with amazing products that
          solve their business and web problems. weDevs is special because -"
        cardsData={servicesData}
      />
      <Testimonial />
      <TechnologyShowcase />
      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  );
}
