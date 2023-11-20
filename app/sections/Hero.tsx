import { MoveRight, ArrowDownToLine } from "lucide-react";

import Section from "@/components/Section";
import { socials } from "@/content/socials";
import { email } from "@/content/data";

export default function Hero() {
    return (<Section id="home" className="flex items-center justify-center max-w-5xl min-h-screen">
        <div>
            <h2 className="text-primary-400 font-medium md:text-lg">Hello, I'm</h2>
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-500 from-white" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Surojit Ghosh.</h1>

            <p className="mt-5 font-medium max-w-2xl text-neutral-400 md:text-lg capitalize">A Full Stack Web Developer based in India With 2+ years of experience.</p>

            <div className="my-8 flex gap-3">
                {socials.map((social: any, index: number) => (<a className="hover:text-neutral-300 text-neutral-400 transition-all" key={index} href={social.url} rel="noreferrer" target="_blank"><social.icon size={22} /></a>))}
            </div>

            <div className="gap-5 flex pt-2">
                <a href={`mailto:${email}`} rel="noreferrer" target="_blank" className="px-4 md:px-5 py-2 bg-primary hover:bg-primary-600 transition-all rounded-sm flex items-center justify-center gap-2">Lets Talk <MoveRight /></a>
                {/* <button className="px-4 md:px-5 py-1.5 border-2 border-primary hover:bg-primary hover:bg-opacity-20 transition-all rounded-sm flex items-center justify-center gap-2">Download CV <ArrowDownToLine /></button> */}
            </div>
        </div>
    </Section>);
}; 