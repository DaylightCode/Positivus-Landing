'use client'

export default function Footer() {

  
  return (
    <section className="lg:mt-24 mt-10">
      <div className="bg-[var(--dark)] rounded-t-[45px] lg:px-24 lg:py-14 p-10">
        <div className="flex flex-col lg:flex-row justify-between text-white">
          <a className="mb-6 self-center lg:self-auto">
          <img 
            src="/Logo.svg" 
            alt="Logo" 
            className="h-6 w-auto lg:h-8 brightness-0 invert"
          />
          </a>
    
          <ul className="flex flex-col text-center lg:flex-row gap-2 lg:gap-10 lg:underline">
            <li><a href="#About-us" className="text-lg">About us</a></li>
            <li><a href="#Services" className="text-lg">Services</a></li>
            <li><a href="#Use-Cases" className="text-lg">Use Cases</a></li>
            <li><a href="#Prices" className="text-lg">Prices</a></li>
            <li><a href="#Blog" className="text-lg">Blog</a></li>
          </ul>
          
          <div className="flex gap-6 justify-center lg:justify-start mt-8 lg:mt-0">
          <a href="#LinkedIn">
          <img 
            src="/LinkedIn-white-icon.svg" 
            alt="LinkedIn-logo" 
            className="h-8 w-auto"
          />
          </a>
          <a href="#Facebook">
          <img 
            src="/Facebook-white-icon.svg" 
            alt="Facebook-logo" 
            className="h-8 w-auto"
          />
          </a>
          <a href="#Twitter">
          <img 
            src="/Twitter-white-icon.svg" 
            alt="Twitter-logo" 
            className="h-8 w-auto"
          />
          </a>
          </div>
        </div>

        
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-start gap-10">
         <div className="text-center lg:text-left w-full lg:w-auto">
          <span className="inline-block border border-[var(--green)] text-xl font-medium p-0.5 bg-[var(--green)] rounded-[7px] text-[var(--dark)] ">Contact us:</span>
          <div className="text-white text-lg flex flex-col mt-10 gap-4 items-center lg:items-start">
           <span>Email: info@positivus.com</span>
           <span>Phone: 555-567-8901</span>
           <span>
            Address: 1234 Main St<br />
            Moonstone City, Stardust State 12345
           </span>
          </div>
         </div>

        <div className="bg-[#292A32] rounded-[14px] p-10 lg:p-16 lg:w-auto lg:max-w-xl w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <input
              type="email"
              id="email"
              placeholder="Email"
              className="outline-none p-5 border border-white bg-transparent rounded-[14px] text-white placeholder:text-white w-full"
              />
            </div>
            <div>
              <button className="bg-[var(--green)] rounded-[14px] px-8 py-5 font-medium whitespace-nowrap w-full">Subscribe to news</button>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full h-px bg-white mt-10"></div>

        <div className="flex text-md lg:text-lg text-white mt-10 gap-10 ">
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <a href="#Private-Policy">
          <span className="underline">Privacy Policy</span>
          </a>
        </div>

      </div>
    </section>
  );
}