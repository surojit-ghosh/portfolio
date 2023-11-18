import Navbar from "@/components/Navbar";
import { About, Hero, Portfolio, Service, Skills } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Service />
    {/* <Portfolio /> */}
    {/* TODO Testimonials */}
     {/* TODO recent blogs */}
    {/* TODO contact */}
  </>);
};