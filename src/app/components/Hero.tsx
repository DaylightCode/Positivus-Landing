'use client'

export default function Hero() {
  const companies = ['Amazon', 'Dribbble', 'HubSpot', 'Notion', 'Netflix', 'Zoom'];
  const companies_1 = ['Amazon', 'Dribbble', 'HubSpot'];
  const companies_2 = ['Notion', 'Netflix', 'Zoom'];
  const heroImage = '/Hero-image.svg';
  
  return (
    <section className="lg:mt-24 mt-10">
      {/* Left Part */}
      <div className="flex gap-8 lg:gap-16 xl:gap-64 items-start">
       <div className="flex flex-col gap-10">
         <h1 className="text-6xl max-w-2xl leading-tight font-medium">Navigating the digital landscape for success</h1>
         <img src={heroImage} alt="Digital marketing illustration" className="lg:hidden"/>
         <p className="text-xl max-w-2xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
         <button className="w-full lg:w-fit cursor-pointer border border-[var(--dark)] px-8 py-4 rounded-xl bg-[var(--dark)] hover:bg-white hover:text-[var(--dark)] text-white transition duration-300">Book a consultation</button>
       </div>

      {/* Right Part */}
        <img src={heroImage} alt="Digital marketing illustration" className="hidden lg:block w-full max-w-md xl:max-w-lg flex-shrink-0 -mt-6"/>
      </div>
      
      {/* Companies Desktop */}
      <div className="hidden lg:flex xl:gap-28 lg:gap-20 mt-20 mix-blend-luminosity">
        {companies.map((company) => (
          <img
            key={company}
            src={`/${company}-logo.svg`}
            alt={`${company} logo`}
            className="h-8 xl:h-14 w-auto flex-shrink-0"
          />
        ))}
      </div>

      {/* Companies Mobile */}
      <div className="flex flex-col items-center">
      <div className="lg:hidden mt-20 mix-blend-luminosity flex gap-6">
        {companies_1.map((company) => (
          <img
            key={company}
            src={`/${company}-logo.svg`}
            alt={`${company} logo`}
            className="h-10 w-auto flex-shrink-0"
          />
        ))}
      </div>

      <div className="lg:hidden mt-10 mix-blend-luminosity flex gap-6">
        {companies_2.map((company) => (
          <img
            key={company}
            src={`/${company}-logo.svg`}
            alt={`${company} logo`}
            className="h-10 xl:h-14 w-auto flex-shrink-0"
          />
        ))}
      </div>

      </div>
    </section>
  );
}