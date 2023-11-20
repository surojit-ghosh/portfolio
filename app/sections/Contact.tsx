import Section from "@/components/Section";
import { email } from "@/content/data";
import { MoveRight } from "lucide-react";

export default function Contact() {
    return (<Section id="contact" className="flex items-center flex-col gap-5">
        <h1 className="text-3xl font-semibold text-center w-full">Contact Me</h1>
        <p className="max-w-3xl text-neutral-300 text-center">Whether it's a full-time role, a freelancing gig, or just a friendly hello, feel free to reach out. I'm actively seeking new opportunities and would love to connect with you!</p>
        <a href={`mailto:${email}`} rel="noreferrer" target="_blank" className="px-4 md:px-5 py-2 bg-primary hover:bg-primary-600 transition-all rounded-sm flex items-center justify-center gap-2">Lets Talk <MoveRight /></a>
    </Section>);
}; 