import Section from "@/components/Section";
import { services } from "@/content/services";

export default function Skillst() {
    return (<Section id="service" height="fit" className="">
        <h1 className="text-3xl font-semibold mb-10">My Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service: any, index: number) => (<div key={index} className="bg-dark-gray-3 px-5 py-8 lg:py-16 rounded-sm shadow-lg flex flex-col items-center gap-5">
                <div className="p-5 bg-dark-gray w-fit rounded-full"><service.icon className="text-primary" size={55} /></div>
                <h2 className="text-center text-xl font-semibold text-light-gray uppercase">{service.title}</h2>
                <p className="text-center text-medium-gray">{service.description}</p>
            </div>))}
        </div>
    </Section>);
}; 