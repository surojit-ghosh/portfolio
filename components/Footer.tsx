import { email } from "@/content/data";
import { socials } from "@/content/socials";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (<footer className="[&:nth-child(odd)]:bg-dark-gray-2">
        <p className="text-center text-medium-gray p-5 [word-spacing:1px]">
            Built with <FaHeart className="text-primary inline-block" /> using <span className="font-medium">Next.js</span> and <span className="font-medium">Tailwind CSS</span> by <a href={socials.filter((social) => social.name.toLowerCase() == "github")[0]?.url} rel="noreferrer" target="_blank" className="text-primary hover:text-primary-hover font-medium">Surojit Ghosh</a>
        </p>
    </footer>);
}; 