'use client'

export default function Card() {
  
  return (
    <section className="lg:mt-24 mt-10">
      {/* Left Part */}
     <div className="bg-[var(--gray)] rounded-[45px] flex p-12 lg:p-16 justify-between items-center relative">
       <div className="flex flex-col gap-6 max-w-xl z-10">
        <h3 className="font-medium text-3xl">Let’s make things happen</h3>
        <p className="text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button className="lg:w-auto cursor-pointer border border-[var(--dark)] px-8 py-4 rounded-xl bg-[var(--dark)] hover:bg-[var(--gray)] hover:text-[var(--dark)] text-white transition duration-300">Get your free proposal</button>
      </div>
     
      {/* Right Part */}
       <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
        <img src="/Card-image.svg" alt="Card-image" className="hidden lg:block w-80 h-auto   "/>
       </div>
      </div>
    </section>
  );
}