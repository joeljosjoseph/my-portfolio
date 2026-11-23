import Header from "@/components/Header/Header";
import HomeSection from "@/components/Sections/Home";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Services from "@/components/Sections/Services";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="home-wrapper" aria-hidden="true" />
        <HomeSection />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
