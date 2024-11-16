import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HLine from "@/components/HLine";
import NewArrival from "@/components/NewArrival";
import Products from "@/components/Products";

export default function Home() {
  return (
   <div>
    <Header />
    <Hero />
   <HLine />
    <Products />
   <HLine />
    <NewArrival />
    <HLine />
    <Contact />
    <Footer />
   </div>
  );
}
