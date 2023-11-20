import Section from "@/components/Section";
import { skills } from "@/content/skills";
import Image from "next/image";

export default function Skills() {
    return (<Section id="about" className="">
        <h1 className="text-3xl font-semibold mb-10">My Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {skills.map((category: any, index: number) => (<ul key={index} className="bg-neutral-900 w-full p-5 rounded-sm">
                <h2 className="capitalize font-medium text-xl">{category.category}</h2>
                <div className="flex flex-wrap mt-5 gap-3">
                    {category.skills.map((skill: any, i: number) => (<li key={i} className={`w-fit px-2 text-sm py-2 rounded-sm border-2 border-neutral-400 border-opacity-50 flex items-center gap-2`}>
                        <div className="relative aspect-square w-5">
                            <Image src={skill.icon} alt={skill.name + " icon"} fill style={{ objectFit: 'contain' }} />
                        </div>
                        {skill.name}
                    </li>))}
                </div>
            </ul>))}
        </div>
    </Section>);
}; 