import Navbar from "@/components/Navbar";
import { About, Contact, Hero, Portfolio, Service, Skills } from "./sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Service />
    {/* <Portfolio /> */}
    <Contact />
    <Footer />
  </>);
};