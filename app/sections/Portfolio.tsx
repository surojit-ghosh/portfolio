import Section from "@/components/Section";
import { projects, ProjectType } from "@/content/projects";
import { roboto_mono } from "@/fonts";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Skillst() {
    return (<Section id="portfolio" className="">
        <h1 className="text-3xl font-semibold text-start w-full mb-10">Portfolio</h1>
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
            {/* TODO: top 4 featured projects (responsivenes 4*1, 2*2, 1*4) */}
            {projects.filter((project: ProjectType) => project.featured).map((project: ProjectType, index: number) => (<div key={index} className="w-full md:[&:nth-child(odd)]:flex-row-reverse md:flex-row flex-col-reverse group md:odd:text-right flex bg-dark-gray-3 p-5 xl:p-10 rounded gap-5 xl:gap-10">
                <div className="flex-1 relative">
                    <h1 className="text-2xl font-semibold text-light-gray">{project.title}</h1>

                    <p className="text-medium-gray my-5">{project.description}</p>

                    <ul className={roboto_mono.className + " flex gap-5 text-medium-gray text-sm text-right md:group-odd:justify-end mb-16"}>
                        {project.techstack.map((tech: string, i: number) => (<li key={i}>{tech}</li>))}
                    </ul>

                    <div className="absolute group-even:bottom-0 group-even:left-0 group-odd:bottom-0 group-odd:right-0 flex gap-3">
                        {project.github && <a href={project.github} className="text-medium-gray hover:-translate-y-0.5 transition-all inline-block"><Github /></a>}
                        {project.preview && <a href={project.preview} className="text-medium-gray hover:-translate-y-0.5 transition-all inline-block"><ExternalLink /></a>}
                    </div>
                </div>

                <div className="relative aspect-[4/3] md:max-w-[450px] w-full h-full">
                    <Image src={"/image.jpeg"} className="" alt="logo" fill style={{ objectFit: 'cover' }} />
                </div>
            </div>))}
        </div>

        {/* TODO: Other featured projects max(6) */}
        {/* TODO: All projects page */}
    </Section>);
}; 