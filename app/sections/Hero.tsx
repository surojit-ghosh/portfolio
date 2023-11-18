import { MoveRight, ArrowDownToLine } from "lucide-react";

import Section from "@/components/Section";
import { socials } from "@/content/socials";

export default function Hero() {
    return (<Section id="home" className="flex items-center justify-center max-w-5xl min-h-screen">
        <div>
            <h2 className="text-primary md:text-lg">Hello, I'm</h2>
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary from-light-gray" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Surojit Ghosh.</h1>

            <p className="mt-5 font-medium max-w-2xl text-medium-gray md:text-lg capitalize">A Full Stack Web Developer based in India With 2+ years of experience.</p>

            <div className="my-8 flex gap-3">
                {socials.map((social: any, index: number) => (<a className="hover:text-light-gray text-medium-gray transition-all" key={index} href={social.url} rel="noreferrer" target="_blank"><social.icon size={22} /></a>))}
            </div>

            <div className="gap-5 flex pt-2">
                <button className="px-4 md:px-5 py-2 border-2 border-primary bg-primary hover:bg-primary-hover transition-all rounded-sm text-dark-gray flex items-center justify-center gap-2">Lets Talk <MoveRight /></button>
                <button className="px-4 md:px-5 py-2 border-2 border-primary hover:bg-primary hover:bg-opacity-10 transition-all rounded-sm flex items-center justify-center gap-2">Download CV <ArrowDownToLine /></button>
            </div>
        </div>
    </Section>);
}; 