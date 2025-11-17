'use client'

export default function CaseStudies() {

  const text1 = "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
  const text2 = "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
  const text3 = "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."

  return (
    <section className="lg:mt-24 mt-10">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Case Studies
        </h2>
        <p className="text-xl text-center lg:text-left max-w-2xl">
          Explore Real-Life Examples of Our Proven Digital Marketing 
          Success through Our Case Studies
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block bg-[var(--dark)] mt-10 lg:mt-24 rounded-[45px]">
       <div className="flex">

        <div className="flex flex-col p-16 gap-4 flex-1 relative after:absolute after:content-[''] after:right-0 after:top-[20%] after:bottom-[20%] after:w-px after:bg-white">
            <p className="text-lg text-white">{text1}</p>
            <a href="#Learn-more1" className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </a>
        </div>
        
        <div className="flex flex-col p-16 gap-4 flex-1 relative after:absolute after:content-[''] after:right-0 after:top-[20%] after:bottom-[20%] after:w-px after:bg-white">
            <p className="text-lg text-white">{text2}</p>
            <a href="#Learn-more2" className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </a>
        </div>

        <div className="flex flex-col p-16 gap-4 flex-1">
            <p className="text-lg text-white">{text3}</p>
            <a href="#Learn-more3" className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </a>
        </div>

       </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex overflow-x-auto scrollbar-hide mt-10 gap-4">

      <div className="bg-[var(--dark)] rounded-[45px] min-w-[85vw]">
        <div className="flex flex-col p-16 gap-4 ">
            <p className="text-lg text-white">{text1}</p>
            <div className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </div>
        </div>   
      </div>

      <div className="bg-[var(--dark)] rounded-[45px] min-w-[85vw] ">
        <div className="flex flex-col p-16 gap-4">
            <p className="text-lg text-white">{text2}</p>
            <div className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </div>
        </div>   
      </div>

      <div className="bg-[var(--dark)] rounded-[45px] min-w-[85vw]">
        <div className="flex flex-col p-16 gap-4">
            <p className="text-lg text-white">{text3}</p>
            <div className="flex items-center gap-2">
            <p className="text-xl text-[var(--green)]">Learn more</p>
            <img src="/Dark-arrow-icon.svg" alt="Arrow"/>
            </div>
        </div>   
      </div>

      </div>

    </section>
  );
}