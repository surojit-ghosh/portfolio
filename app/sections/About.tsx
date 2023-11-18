import { MoveRight, ArrowDownToLine } from "lucide-react";
import Section from "@/components/Section";
import Image from "next/image";
import { email } from "@/content/data";

export default function About() {
    return (<Section id="about" className="">
        <div className={`flex flex-col items-center md:flex-row md:items-start gap-10`}>
            <div className="flex w-full flex-col gap-5 md:gap-10">
                {/* <div className="flex w-full items-center gap-3"> */}
                <h1 className="text-3xl font-semibold mb-5 md:mb-0">About Me</h1>
                {/* <span className="flex-1 bg-medium-gray h-0.5 opacity-50"></span> */}
                {/* </div> */}

                <div className="space-y-5">
                    <p className="text-medium-gray ">Hello, I'm Surojit. I am a dedicated and enthusiastic developer with a strong passion for coding and problem-solving. Proficient in multiple programming languages, with a focus on web development, Discord bot development, and a few other areas. Whether working independently or as part of a dynamic team, I am eager to leverage my technical skills to transform your project vision into reality.</p>
                    <p className=" text-medium-gray">Aside from coding, I have a passion for playing volleyball and am actively involved in a local club and I sometimes play video games.</p>
                </div>

                <div className="gap-5 flex pt-2">
                    <a href={`mailto:${email}`} rel="noreferrer" target="_blank" className="px-4 md:px-5 py-2 border-2 border-primary bg-primary hover:bg-primary-hover transition-all rounded-sm text-dark-gray flex items-center justify-center gap-2">Lets Talk <MoveRight /></a>
                    {/* <button className="px-4 md:px-5 py-2 border-2 border-primary hover:bg-primary hover:bg-opacity-10 transition-all rounded-sm flex items-center justify-center gap-2">Download CV <ArrowDownToLine /></button> */}
                </div>
            </div>

            <div className="relative aspect-[3/4] mr-[10px] mb-[10px] w-full max-w-xs drop-shadow-[10px_10px_0px_#DAED6E]">
                <Image src={"/image.jpeg"} alt="logo" fill style={{ objectFit: 'cover' }} />
            </div>
        </div>
    </Section>);
}; 