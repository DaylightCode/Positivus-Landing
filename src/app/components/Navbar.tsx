'use client'

import {useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white lg:mt-10 mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img 
            src="/Logo.svg" 
            alt="Logo" 
            className="h-6 w-auto lg:h-8"
          />
        </a>
      
        {/* Desktop Menu + Button */}
        <div className="hidden lg:flex items-center gap-10 mt-2">
          <ul className="flex gap-10">
            <li><a href="#About-us" className="text-xl">About us</a></li>
            <li><a href="#Services" className="text-xl">Services</a></li>
            <li><a href="#Use-Cases" className="text-xl">Use Cases</a></li>
            <li><a href="#Prices" className="text-xl">Prices</a></li>
            <li><a href="#Blog" className="text-xl">Blog</a></li>
          </ul>

          <button className="cursor-pointer border border-black px-6 py-3 rounded-xl hover:bg-[var(--dark)] hover:text-white transition duration-300">
            Request a quote
          </button>
        </div>

        {/* Mobile Menu + Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
          <button 
          className="lg:hidden"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          </button>
          </SheetTrigger>
        
        <SheetContent>
          <SheetHeader>
            <SheetTitle><a href="/">
          <img 
            src="/Logo.svg" 
            alt="Logo" 
            className="h-6 w-auto lg:h-8"
          />
        </a></SheetTitle>
          </SheetHeader>
          <div className="px-4 flex flex-col flex-1 justify-between">
            <ul className='flex flex-col gap-4'>
            <li><a href="#about-us" className="text-xl">About us</a></li>
            <li><a href="#services" className="text-xl">Services</a></li>
            <li><a href="#use-Cases" className="text-xl">Use Cases</a></li>
            <li><a href="#prices" className="text-xl">Prices</a></li>
            <li><a href="#blog" className="text-xl">Blog</a></li>
            </ul>
            
            <button className="mb-8 cursor-pointer border border-black px-6 py-3 rounded-xl hover:bg-[var(--dark)] hover:text-white transition duration-300">
              Request a quote
            </button>
          </div>
        </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}