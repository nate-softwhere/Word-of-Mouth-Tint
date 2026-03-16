import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Messaging from "@/components/Messaging";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Gallery />
        <Messaging />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
