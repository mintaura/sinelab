import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/common/Newsletter";
import Profile from "@/components/profile/Profile";

export const metadata = {
  title: "DevHub Pro | Profile",
  description:
    "Manage your DevHub Pro profile with ease. Update your account details, billing address, and access products like Dokan, WP Project Manager, WP ERP, and more—all from one dashboard.",
  openGraph: {
    images: ["https://i.ibb.co/zTPQfbwD/profile-seo.png"],
  },
  twitter: {
    images: ["https://i.ibb.co/zTPQfbwD/profile-seo.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Profile />
      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  );
}
