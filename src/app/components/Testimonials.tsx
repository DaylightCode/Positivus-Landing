'use client'

import { useRef, useState, useEffect } from 'react'

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.max(0, activeIndex - 1)
      scrollToIndex(newIndex)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.min(testimonials.length - 1, activeIndex + 1)
      scrollToIndex(newIndex)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const children = Array.from(container.children) as HTMLElement[]
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        })
      }
      setActiveIndex(index)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollPosition = container.scrollLeft
      const children = Array.from(container.children) as HTMLElement[]
      
      let closestIndex = 0
      let minDistance = Infinity
      
      children.forEach((child, index) => {
        const childLeft = child.offsetLeft
        const distance = Math.abs(scrollPosition - childLeft)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })
      
      setActiveIndex(closestIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const testimonials = [
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
  ]

  return (
    <section className="mt-24">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Testimonials
        </h2>
        <p className="text-xl text-center lg:text-left max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials<br />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="mt-10 lg:mt-24 bg-[var(--dark)] rounded-[45px]">
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide flex snap-x snap-mandatory">
         <div className="lg:py-24 lg:pl-24 p-10 flex-shrink-0 w-full lg:w-auto snap-start">
           <div className="relative border border-[var(--green)] rounded-[45px] max-w-2xl">
             <p className="text-white text-lg p-10">{testimonials[0].description}</p>
           </div>
          <div className="mt-10 ml-10">
           <p className="text-[var(--green)] font-medium text-xl">{testimonials[0].name}</p>
           <p className="text-white text-lg">{testimonials[0].position}</p>
          </div>
         </div>

         <div className="lg:py-24 lg:pl-24 p-10 flex-shrink-0 w-full lg:w-auto snap-start">
           <div className="relative border border-[var(--green)] rounded-[45px] max-w-2xl">
             <p className="text-white text-lg p-10">{testimonials[1].description}</p>
           </div>
          <div className="mt-10 ml-10">
           <p className="text-[var(--green)] font-medium text-xl">{testimonials[1].name}</p>
           <p className="text-white text-lg">{testimonials[1].position}</p>
          </div>
         </div>

        <div className="lg:py-24 lg:pl-24 p-10 flex-shrink-0 w-full lg:w-auto snap-start">
           <div className="relative border border-[var(--green)] rounded-[45px] max-w-2xl">
             <p className="text-white text-lg p-10">{testimonials[2].description}</p>
           </div>
          <div className="mt-10 ml-10">
           <p className="text-[var(--green)] font-medium text-xl">{testimonials[2].name}</p>
           <p className="text-white text-lg">{testimonials[2].position}</p>
          </div>
         </div>

         <div className="lg:py-24 lg:pl-24 p-10 flex-shrink-0 w-full lg:w-auto snap-start">
           <div className="relative border border-[var(--green)] rounded-[45px] max-w-2xl">
             <p className="text-white text-lg p-10">{testimonials[3].description}</p>
           </div>
          <div className="mt-10 ml-10">
           <p className="text-[var(--green)] font-medium text-xl">{testimonials[3].name}</p>
           <p className="text-white text-lg">{testimonials[3].position}</p>
          </div>
         </div>

         <div className="lg:py-24 lg:pl-24 p-10 flex-shrink-0 w-full lg:w-auto snap-start">
           <div className="relative border border-[var(--green)] rounded-[45px] max-w-2xl">
             <p className="text-white text-lg p-10">{testimonials[4].description}</p>
           </div>
          <div className="mt-10 ml-10">
           <p className="text-[var(--green)] font-medium text-xl">{testimonials[4].name}</p>
           <p className="text-white text-lg">{testimonials[4].position}</p>
          </div>
         </div>

        </div>

        <div className="flex justify-evenly items-center p-10 mt-10 lg:mt-24">
        <div>
        <button
         onClick={scrollLeft}
         >
          <img 
          src="Gray-arrow-icon.svg"
          alt="Gray-arrow-icon"
          className="w-6 h-6"
          />
         </button>
        </div>

        <div className="flex gap-6 mb-2">
        <button onClick={() => scrollToIndex(0)}>
        <img 
        src="Star.svg"
        alt="Star-icon"
        className="w-4 h-4"
        style={{ filter: activeIndex === 0 ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' : 'none' }}
        />
        </button>

        <button onClick={() => scrollToIndex(1)}>
        <img 
        src="Star.svg"
        alt="Star-icon"
        className="w-4 h-4"
        style={{ filter: activeIndex === 1 ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' : 'none' }}
        />
        </button>

        <button onClick={() => scrollToIndex(2)}>
        <img 
        src="Star.svg"
        alt="Star-icon"
        className="w-4 h-4"
        style={{ filter: activeIndex === 2 ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' : 'none' }}
        />
        </button>

        <button onClick={() => scrollToIndex(3)}>
        <img 
        src="Star.svg"
        alt="Star-icon"
        className="w-4 h-4"
        style={{ filter: activeIndex === 3 ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' : 'none' }}
        />
        </button>

        <button onClick={() => scrollToIndex(4)}>
        <img 
        src="Star.svg"
        alt="Star-icon"
        className="w-4 h-4"
        style={{ filter: activeIndex === 4 ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' : 'none' }}
        />
        </button>

        </div>

      <div>
         <button
         onClick={scrollRight}
         >
          <img 
          src="Gray-arrow-icon.svg"
          alt="Gray-arrow-icon"
          className="w-6 h-6 rotate-180"
          />
         </button>
        </div>
      </div>

      
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}