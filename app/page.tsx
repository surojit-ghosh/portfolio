import Navbar from "@/components/Navbar";
import { About, Hero, Service, Skills } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Service />
  </>);
};