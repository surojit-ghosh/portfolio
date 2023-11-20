import Section from "@/components/Section";
import { email } from "@/content/data";
import { services } from "@/content/services";
import { MoveRight } from "lucide-react";

export default function Service() {
    return (<Section id="service" className="">
        <h1 className="text-3xl font-semibold mb-10">My Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service: any, index: number) => (<div key={index} className="bg-neutral-950 px-5 py-8 lg:py-16 rounded-sm shadow-lg flex flex-col items-center gap-5">
                <div className="p-5 bg-neutral-900 w-fit rounded-full"><service.icon className="text-primary" size={55} /></div>
                <h2 className="text-center text-xl font-semibold text-neutral-300 uppercase">{service.title}</h2>
                <p className="text-center text-neutral-400">{service.description}</p>
            </div>))}
        </div>

        <div className="mt-10 flex items-center justify-center">
            <a href={`mailto:${email}`} rel="noreferrer" target="_blank" className="text-lg font-medium w-fit flex items-center justify-center gap-2 text-primary-400 relative after:content-[''] after:bg-primary-400 after:h-0.5 after:absolute after:w-0 after:left-0 after:-bottom-1 after:rounded-xl after:duration-500 after:ease-out hover:after:w-full">Lets talk about Your project <MoveRight /></a>
        </div>
    </Section>);
}; 