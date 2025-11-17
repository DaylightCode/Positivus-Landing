'use client'

export default function Team() {
  const team = [
    {
      photo: '/John.png',
      name: 'John Smith',
      position: 'CEO and Founder',
      description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
      photo: '/Jane.png',
      name: 'Jane Doe',
      position: 'Director of Operations',
      description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    },
    {
      photo: '/Michael.png',
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
      photo: '/Emily.png',
      name: 'Emily Johnson',
      position: 'PPC Manager',
      description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
      photo: '/Brian.png',
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    },
    {
      photo: '/Sarah.png',
      name: 'Sarah Kim',
      position: 'Content Creator',
      description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    },
  ]
  
  return (
    <section className="lg:mt-24 mt-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <h2 className="bg-[var(--green)] p-1 rounded font-medium text-5xl text-center lg:text-left">
          Team
        </h2>
        <p className="text-xl text-center lg:text-left max-w-2xl">
          Meet the skilled and experienced team behind our<br />
          successful digital marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-24">
        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-[45px] p-8 lg:p-10 border border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] flex flex-col"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 lg:gap-5 flex-1">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="text-lg lg:text-xl font-medium">{member.name}</h4>
                  <p className="text-base lg:text-lg">{member.position}</p>
                </div>
              </div>
              <img 
                src="/LinkedIn-icon.svg" 
                alt="LinkedIn" 
                className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer flex-shrink-0 ml-2"
              />
            </div>

            <div className="w-full h-px bg-black mb-6"></div>

            <p className="text-base lg:text-lg leading-relaxed">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-end mt-8 lg:mt-10">
        <button className="w-full lg:w-64 cursor-pointer border border-[var(--dark)] px-8 py-4 rounded-xl bg-[var(--dark)] hover:bg-white hover:text-[var(--dark)] text-white transition duration-300">
          See all team
        </button>
      </div>
    </section>
  );
}