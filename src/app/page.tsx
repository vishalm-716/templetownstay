import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoomDetails from "@/components/RoomDetails";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RoomDetails />
        <About />
        <WhyChooseUs />
        <Leadership />
        <Gallery />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
      <FloatingWhatsApp />
    </>
  );
}
