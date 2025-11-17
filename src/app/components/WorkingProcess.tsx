'use client'

import { useState } from 'react';

export default function WorkingProcess() {

  const [openIndex, setOpenIndex] = useState(0);

   const processes = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'We conduct thorough market research and competitor analysis to develop a comprehensive strategy tailored to your business objectives and target audience.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our team executes the agreed-upon strategy with precision, implementing all necessary campaigns, content, and marketing initiatives across chosen channels.'
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      description: 'We continuously monitor campaign performance, analyze data, and make real-time adjustments to maximize results and ROI.'
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      description: 'Regular transparent reports keep you informed about progress, metrics, and achievements, ensuring clear communication throughout the process.'
    },
    {
      number: '06',
      title: 'Continual Improvement',
      description: 'We believe in ongoing optimization, constantly refining strategies based on results and emerging opportunities to ensure sustained growth.'
    }
  ];

  const toggleAccordion = (index:number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="lg:mt-24 mt-10">

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Our Working Process
        </h2>
        <p className="text-xl text-center lg:text-left max-w-2xl">
          Step-by-Step Guide to Achieving<br />
          Your Business Goals
        </p>
      </div>

      
      <div className="mt-10 lg:mt-24 flex flex-col gap-10">
        
      {processes.map((process, index) => (
        <div
        key={index}
        className={`transition-all duration-300 ${openIndex === index ? 'bg-[var(--green)]' : 'bg-[var(--gray)]'
        } rounded-[30px] lg:rounded-[45px] border-[1px] border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] overflow-hidden`}
      >
        
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex p-6 lg:p-16 gap-8 items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"
        >
        <div className="flex gap-4 lg:gap-8 items-center">
          <span className="font-medium text-4xl lg:text-6xl">{process.number}</span>
          <span className="font-medium text-xl lg:text-3xl text-left">{process.title}</span>
        </div>

         <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex-shrink-0 border border-black bg-white flex items-center justify-center transition-transform duration-300">
           <div className="relative w-4 h-4 lg:w-6 lg:h-6">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2"></div>
            <div
            className={`absolute left-1/2 top-0 w-1 h-full bg-black -translate-x-1/2 transition-transform duration-300 ${
            openIndex === index ? 'scale-0' : 'scale-100'}`}
            ></div>
            </div>
          </div>
        </button>

        <div
        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
        <div className="px-6 lg:px-16 pb-6 lg:pb-16">
          <div className="w-full h-[1px] bg-black mb-6"></div>
          <p className="text-base lg:text-lg leading-relaxed">
             {process.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}