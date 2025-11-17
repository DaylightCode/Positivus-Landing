'use client'

export default function Services() {
  const services = [
    {
      h1: 'Search engine',
      h2: 'optimization',
      titleBg: 'bg-[var(--green)]',
      cardBg: 'bg-[var(--gray)]',
      textColor: 'text-black',
      arrowIcon: '/Dark-arrow-icon.svg',
      illustration: '/Search-engine-icon.svg',
    },
    {
      h1: 'Pay-per-click',
      h2: 'advertising',
      titleBg: 'bg-white',
      cardBg: 'bg-[var(--green)]',
      textColor: 'text-black',
      arrowIcon: '/Dark-arrow-icon.svg',
      illustration: '/Pay-per-click-icon.svg',
    },
    {
      h1: 'Social Media',
      h2: 'Marketing',
      titleBg: 'bg-white',
      cardBg: 'bg-[var(--dark)]',
      textColor: 'text-white',
      arrowIcon: '/White-arrow-icon.svg',
      illustration: '/Social-Media-icon.svg',
    },
    {
      h1: 'Email',
      h2: 'Marketing',
      titleBg: 'bg-[var(--green)]',
      cardBg: 'bg-[var(--gray)]',
      textColor: 'text-black', 
      arrowIcon: '/Dark-arrow-icon.svg',
      illustration: '/Email-Marketing-icon.svg',
    },
    {
      h1: 'Content',
      h2: 'Creation',
      titleBg: 'bg-white',
      cardBg: 'bg-[var(--green)]',
      textColor: 'text-black',
      arrowIcon: '/Dark-arrow-icon.svg',
      illustration: '/Content-Creation-icon.svg',
    },
    {
      h1: 'Analytics and ',
      h2: 'Tracking',
      titleBg: 'bg-[var(--green)]',
      cardBg: 'bg-[var(--dark)]',
      textColor: 'text-white',
      arrowIcon: '/White-arrow-icon.svg',
      illustration: '/Analytics-icon.svg',
    },
  ]

  return (
    <section className="mt-24">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Services
        </h2>
        <p className="text-xl text-center lg:text-left max-w-2xl">
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.cardBg} rounded-[45px] p-12 border-[1px] border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] min-h-[300px] flex flex-col justify-between relative transition-all duration-200 hover:shadow-[0_0px_0_0_rgba(0,0,0,1)] hover:translate-y-[5px]`}
          >
            {/* Title */}
            <div className="relative">
              <h3 className={`${service.titleBg} inline-block px-2 py-1 rounded-md text-3xl font-medium`}>
                {service.h1}
              </h3>
              <br />
              <h3 className={`${service.titleBg} inline-block px-2 py-1 rounded-md text-3xl font-medium`}>
                {service.h2}
              </h3>
            </div>

            {/* SVG illustrations */}
            <div className="w-48 h-48  ml-auto mr-0 my-4 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-50 lg:h-50 lg:my-0">
              <img
                src={service.illustration}
                alt={`${service.h1} ${service.h2}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Learn more Button */}
            <button className={`flex items-center gap-3 text-lg mt-auto relative z-10 ${service.textColor}`}>
              <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src={service.arrowIcon}
                  alt="Arrow"
                />
              </div>
              <span className="hidden lg:block">Learn more</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}