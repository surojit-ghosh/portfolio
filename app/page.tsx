import Navbar from "@/components/Navbar";
import { About, Hero } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <About />
  </>);
};