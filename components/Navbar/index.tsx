"use client";

import { useEffect, useState } from "react";
import { pragmatica } from "@/fonts";
import Link from "next/link";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" }
];

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

  return (<header className={"fixed w-full right-0 bg-dark-gray bg-opacity-80 backdrop-blur-md z-10 transition-all ease-out duration-500 " + `${isNavbarVisible ? "top-0" : "-top-20"}`}>
    <nav className="max-w-7xl px-5 h-[72px] flex justify-between items-center mx-auto">
      <h1 className={pragmatica.className + " uppercase text-3xl tracking-wide"}>SURO<span className="text-primary">JIT.</span></h1>

      <div className={`space-y-5 md:space-y-0 flex flex-col md:flex-row md:space-x-8 md:static absolute w-1/2 md:w-auto bg-dark-gray md:bg-none bg-opacity-80 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0 top-[70px] h-screen md:h-auto pl-5 md:pl-0 pt-5 md:pt-0 ${isOpen ? "right-0 ease-out transition-all duration-300" : "-right-80 sm:-right-96 ease-out transition-all duration-300"}`}>
        {LINKS.map((section: any, index: number) => (<Link onClick={() => setIsOpen(!isOpen)} className={`nav-link hover:text-primary transition-colors ${currentSection.length && (section.href.includes(currentSection) ? "text-primary" : "")}`} key={index} href={section.href}>{section.name}</Link>))}
        <Link scroll={false} href={"#contact"} className="block md:hidden hover:text-primary transition-colors">Contact</Link>
      </div>


      <div className="flex items-center gap-6" >
        <Link href={"/#contact"} className="px-5 py-2 border-2 border-primary bg-primary hover:bg-primary-hover transition-all rounded-sm text-dark-gray hidden md:block">Contact</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="w-5 h-5 hover:cursor-pointer relative my-auto md:hidden">
          <span className={`w-full h-0.5 bg-light-gray text-gray-50 rounded-full absolute right-0 ${isOpen ? "-rotate-45 transition-all ease-out duration-300 -mt-0" : "rotate-0 transition-all ease-out duration-300 -mt-1.5"}`}></span>
          <span className={`w-full h-0.5 bg-light-gray text-gray-50 rounded-full absolute right-0 ${isOpen ? "scale-0 opacity-0 transition-all ease-out duration-300" : "scale-100 opacity-100 transition-all ease-out duration-300"}`}></span>
          <span className={`w-full h-0.5 bg-light-gray text-gray-50 rounded-full absolute right-0 ${isOpen ? "rotate-45 transition-all ease-out duration-300 mt-0" : "rotate-0 transition-all ease-out duration-300 mt-1.5"}`}></span>
        </button>
      </div>
    </nav>
  </header>);
};