'use client'

import { useRef, useState, useEffect } from 'react'

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1)
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const newIndex = Math.min(testimonials.length - 1, activeIndex + 1)
    scrollToIndex(newIndex)
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollWidth = container.offsetWidth
      container.scrollTo({
        left: scrollWidth * index,
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollWidth = container.offsetWidth
      const scrollPosition = container.scrollLeft
      const newIndex = Math.round(scrollPosition / scrollWidth)
      setActiveIndex(newIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      let timeoutId: NodeJS.Timeout
      const debouncedHandleScroll = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(handleScroll, 50)
      }
      container.addEventListener('scroll', debouncedHandleScroll)
      return () => {
        container.removeEventListener('scroll', debouncedHandleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [])
  
  const testimonials = [
    {
      name: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: 'Sarah Johnson',
      position: 'CEO at ABC Company',
      description: '"Working with Positivus has been a game-changer for our business. Their strategic approach and dedication to results have helped us achieve our marketing goals beyond expectations. The team is knowledgeable, creative, and always goes the extra mile."',
    },
    {
      name: 'Michael Brown',
      position: 'Product Manager at Tech Solutions',
      description: '"The expertise and professionalism of the Positivus team are unmatched. They took the time to understand our unique challenges and delivered solutions that perfectly aligned with our business objectives. We couldn\'t be happier with the results."',
    },
    {
      name: 'Emily Davis',
      position: 'Marketing Lead at Innovation Inc',
      description: '"Positivus has transformed our digital presence. Their data-driven approach and creative strategies have significantly improved our ROI. The team is responsive, professional, and truly invested in our success. Highly recommended!"',
    },
    {
      name: 'David Wilson',
      position: 'Founder at StartUp Co',
      description: '"From day one, Positivus understood our vision and helped bring it to life. Their comprehensive marketing strategies and attention to detail have been instrumental in our growth. We look forward to continuing our partnership for years to come."',
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

      <div className="mt-10 lg:mt-24 bg-[var(--dark)] rounded-[45px] overflow-hidden">
        <div 
          ref={scrollContainerRef} 
          className="overflow-x-auto scrollbar-hide flex snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-center snap-always flex items-center justify-center py-10 lg:py-24 px-6 lg:px-12">
              <div className="max-w-3xl w-full">
                <div className="relative border border-[var(--green)] rounded-[45px]">
                  <p className="text-white text-lg p-10">{testimonial.description}</p>
                </div>
                <div className="mt-10 ml-10">
                  <p className="text-[var(--green)] font-medium text-xl">{testimonial.name}</p>
                  <p className="text-white text-lg">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-10 pb-10 lg:px-20">
          <button
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className="disabled:opacity-30 transition-opacity"
          >
            <img 
              src="Gray-arrow-icon.svg"
              alt="Previous"
              className="w-6 h-6"
            />
          </button>

          <div className="flex gap-6">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToIndex(index)}
                className="transition-all"
              >
                <img 
                  src="Star.svg"
                  alt={`Testimonial ${index + 1}`}
                  className="w-4 h-4"
                  style={{ 
                    filter: activeIndex === index 
                      ? 'brightness(0) saturate(100%) invert(88%) sepia(26%) saturate(1757%) hue-rotate(27deg) brightness(104%) contrast(101%)' 
                      : 'none' 
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            disabled={activeIndex === testimonials.length - 1}
            className="disabled:opacity-30 transition-opacity"
          >
            <img 
              src="Gray-arrow-icon.svg"
              alt="Next"
              className="w-6 h-6 rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
