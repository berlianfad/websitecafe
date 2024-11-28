// Mendefinisikan metadata untuk halaman
export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

// Mengimpor komponen yang diperlukan
import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

// Fungsi utama untuk halaman Home
export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
