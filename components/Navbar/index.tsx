"use client";

import { useState } from "react";
import { pragmatica } from "@/fonts";
import Link from "next/link";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Blog", href: "/#blog" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (<header className="fixed w-full right-0 bg-dark-gray bg-opacity-80 backdrop-blur-md">
    <nav className="max-w-7xl px-[5vw] h-[72px] flex justify-between items-center mx-auto">
      <h1 className={pragmatica.className + " uppercase text-3xl tracking-wide"}>SURO<span className="text-primary">JIT.</span></h1>

      <div className={`space-y-5 md:space-y-0 flex flex-col md:flex-row md:space-x-8 md:static absolute w-1/2 md:w-auto bg-dark-gray md:bg-none bg-opacity-80 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0 top-[70px] h-screen md:h-auto pl-5 md:pl-0 pt-5 md:pt-0 ${isOpen ? "right-0 ease-out transition-all duration-300" : "-right-80 sm:-right-96 ease-out transition-all duration-300"}`}>
        {LINKS.map((section: any, index: number) => (<Link className="hover:text-primary transition-colors" key={index} href={section.href} scroll={false}>{section.name}</Link>))}
        <Link href={"/#contact"} className="block md:hidden hover:text-primary transition-colors">Contact</Link>
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