import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { email } from "./data";

export const socials = [
    {
        name: "Github",
        url: "https://github.com/surojit-ghosh",
        icon: Github
    },
    {
        name: "LinkedIN",
        url: "https://www.linkedin.com/in/surojit10x/",
        icon: Linkedin
    },
    {
        name: "Email",
        url: `mailto:${email}`,
        icon: Mail
    },
    {
        name: "Twitter (X)",
        url: "https://twitter.com/SurojitIN",
        icon: FaXTwitter
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/surojit_in",
        icon: Instagram
    }
];