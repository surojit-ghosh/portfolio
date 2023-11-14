import Section from "@/components/Section";
import { montserrat } from "@/fonts";

export default function Hero() {
    return (<Section height="screen" className="flex items-center max-w-5xl">
        <div className={montserrat.className}>
            <h2 className="text-primary text-lg mb-4">Hi, my name is</h2>
            <h1 className="font-bold" style={{ lineHeight: "1.25", fontSize: "clamp(36px, 4vw, 48px)" }}>Surojit Ghosh.</h1>
            <h1 className="mt-1 text-medium-gray md:text-5xl font-bold max-w-3xl" style={{ lineHeight: "1.25", fontSize: "clamp(36px, 4vw, 48px)" }}>A Full Stack Web Developer based in India.</h1>

            <p className="mt-5 mb-8 font-medium max-w-2xl text-medium-gray text-lg">With a love for coding and a commitment to excellence, I've been turning digital dreams into reality for over 2 years. Let's bring your vision to life!</p>

            <div className="space-x-5">
                <button className="px-5 py-2 border-2 border-primary bg-primary hover:bg-primary-hover transition-all rounded-sm text-dark-gray">Hire Me</button>
                <button className="px-5 py-2 border-2 border-primary hover:bg-primary hover:bg-opacity-10 transition-all rounded-sm">Download CV</button>
            </div>
        </div>
    </Section>);
}; 