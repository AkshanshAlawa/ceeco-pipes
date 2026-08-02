import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Legacy from "@/components/home/Legacy";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import QualityManufacturing from "@/components/home/QualityManufacturing";
import WhyHDPE from "@/components/home/WhyHDPE";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import CustomRequirements from "@/components/home/CustomRequirements";
import Testimonials from "@/components/home/Testimonials";
import AfterSales from "@/components/home/AfterSales";
import ContactPreview from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Legacy />
      <Stats />
      <WhyChoose />
      <FeaturedProducts />
      <QualityManufacturing />
      <WhyHDPE />
      <ClientsMarquee />
      <CustomRequirements />
      <Testimonials />
      <AfterSales />
      <ContactPreview />
    </>
  );
}
