"use client";

import { useEffect, useState } from "react";
import { pragmatica } from "@/fonts";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  // { name: "Portfolio", href: "#portfolio" },
  // { name: "Blog", href: "#blog" }
];
const ContactButton = ({ className }: { className: string }) => {
  return <Link href={"/#contact"} className={twMerge("px-4 md:px-5 py-2 w-fit bg-primary hover:bg-primary-600 transition-all rounded-sm", className)}>Contact</Link>
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll(".app-section") as NodeListOf<HTMLElement>;

    function getSectionVisibility(section: HTMLElement): number {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      return (visibleHeight / section.offsetHeight) * 100;
    };

    function findMostVisibleSection(): HTMLElement | null {
      let maxVisibility = 0;
      let mostVisibleSection: HTMLElement | null = null;

      sections.forEach((section) => {
        const visibility = getSectionVisibility(section);

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = section;
        };
      });

      return mostVisibleSection;
    };

    window.addEventListener("scroll", () => {
      const mostVisibleSection = findMostVisibleSection();

      if (mostVisibleSection) {
        setCurrentSection(mostVisibleSection?.id);
      } else {
        setCurrentSection("");
      }
    });


    // Hide and unhide navbar
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos && currentScrollPos >= 100;

      setIsNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function toggleScrolling() {
      const body = document.body;

      !isOpen ? body.style.overflow = 'auto' : body.style.overflow = 'hidden';
    };

    toggleScrolling();
  }, [isOpen]);

  return (<header className={"fixed w-full right-0 bg-neutral-950 bg-opacity-75 backdrop-blur-md z-20 transition-all ease-out duration-500 " + `${(isNavbarVisible || isOpen) ? "top-0" : "-top-20"}`}>
    <nav className="max-w-7xl px-5 h-[72px] flex justify-between items-center mx-auto">
      <h1 className={pragmatica.className + " uppercase text-3xl tracking-wide"}>SURO<span className="text-primary-400">JIT.</span></h1>

      <div className={`space-y-5 md:space-y-0 z-10 flex flex-col md:flex-row md:space-x-8 md:static fixed w-1/2 md:w-auto bg-neutral-950 md:bg-none top-[72px] h-screen md:h-auto pl-5 md:pl-0 pt-5 md:pt-0 ${isOpen ? "right-0 ease-out transition-all duration-300" : "-right-80 sm:-right-96 ease-out transition-all duration-300"}`}>
        {LINKS.map((section: any, index: number) => (<Link onClick={() => setIsOpen(!isOpen)} className={`nav-link hover:text-primary-400 transition-colors ${currentSection.length && (section.href.includes(currentSection) ? "text-primary-400" : "")}`} key={index} href={section.href}>{section.name}</Link>))}
        <ContactButton className="block md:hidden" />
      </div>


      <div className="flex items-center gap-6" >
        <ContactButton className="hidden md:block" />
        <button onClick={() => setIsOpen(!isOpen)} className="w-5 h-5 hover:cursor-pointer relative my-auto md:hidden">
          <span className={`w-full h-0.5 bg-neutral-50 rounded-full absolute right-0 ${isOpen ? "-rotate-45 transition-all ease-out duration-300 -mt-0" : "rotate-0 transition-all ease-out duration-300 -mt-1.5"}`}></span>
          <span className={`w-full h-0.5 bg-neutral-50 rounded-full absolute right-0 ${isOpen ? "scale-0 opacity-0 transition-all ease-out duration-300" : "scale-100 opacity-100 transition-all ease-out duration-300"}`}></span>
          <span className={`w-full h-0.5 bg-neutral-50 rounded-full absolute right-0 ${isOpen ? "rotate-45 transition-all ease-out duration-300 mt-0" : "rotate-0 transition-all ease-out duration-300 mt-1.5"}`}></span>
        </button>
      </div>
    </nav>
  </header>);
};