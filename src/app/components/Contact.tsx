'use client'

export default function Contact() {
  return (
    <section className="lg:mt-24 mt-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Contact
        </h2>
        <p className="text-xl text-center lg:text-left max-w-2xl">
          Connect with Us: Let's Discuss Your<br />
          Digital Marketing Needs
        </p>
      </div>

      <div className="bg-[var(--gray)] rounded-[45px] mt-10 lg:mt-24 lg:p-24 p-10 relative"> 
        <div className="flex-1 w-full lg:w-auto max-w-2xl">
          <div className="flex gap-6 text-lg flex-1 w-full lg:w-auto">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="choice" 
                value="sayhi" 
                className="w-5 h-5" 
                defaultChecked
              />
              <span>Say Hi</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="choice" 
                value="quote" 
                className="w-5 h-5" 
              />
              <span>Get a Quote</span>
            </label>
          </div>

          <div className="flex flex-col mt-10 gap-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              id="Name" 
              pattern="[A-Za-z\s]+"
              className="placeholder:text-lg bg-white rounded-[14px] focus:outline-none p-5 border border-black"
            />
          </div>

          <div className="flex flex-col mt-10 gap-2">
            <span>Email*</span>
            <input
              type="email"
              placeholder="Email"
              id="Email" 
              className="placeholder:text-lg bg-white rounded-[14px] focus:outline-none p-5 border border-black"
            />
          </div>

          <div className="flex flex-col mt-10 gap-2">
            <span>Message*</span>
            <textarea
              placeholder="Message"
              id="Message" 
              className="placeholder:text-lg bg-white rounded-[14px] focus:outline-none p-5 border border-black resize-none h-40"
            />
          </div>

          <button className="w-full mt-10 cursor-pointer border border-[var(--dark)] px-8 py-4 rounded-xl bg-[var(--dark)] hover:bg-white hover:text-[var(--dark)] text-white transition duration-300">
            Send Message
          </button>
        </div>

        <div className="xl:absolute xl:-right-80 xl:top-1/2 xl:-translate-y-1/2">
          <img 
            src="Contact-illustration.svg"
            alt="Contact-illustration"
            className="hidden xl:block w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}