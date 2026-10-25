import React from 'react'
import { motion} from "motion/react"

const ContactForms = () => {
  return (
    <div className='w-full mobile:w-[85%] mobile-lg:w-[75%] tablet:w-[55%] mx-auto mt-5 border-2 border-[#0F345C] p-5 rounded-md'>
      <h2 className='text-white text-4xl mobile:text-5xl mobile-lg:text-6xl tablet:text-7 font-extrabold'> Contact <span className='text-[#FF4C2F]'>Forms</span> </h2>
<hr className='hr_animated mt-2'/> <br/>


<motion.form

initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

action="" className="w-full max-w-xl mx-auto flex flex-col gap-5">

  <div className="flex flex-col gap-2">
    <label htmlFor="name" className="text-sm font-medium text-[#D7E3EF]">
      Your Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Write your name"
      className="w-full h-12 rounded-lg border border-[#254B70] bg-[#0B2A4A] px-4 text-white placeholder:text-[#8299AF] placeholder:text-sm outline-none transition-all duration-300 focus:border-[#00C6FA] focus:ring-2 focus:ring-[#00C6FA]/20"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="subject" className="text-sm font-medium text-[#D7E3EF]">
      Subject
    </label>
    <input
      id="subject"
      type="text"
      placeholder="What is this about?"
      className="w-full h-12 rounded-lg border border-[#254B70] bg-[#0B2A4A] px-4 text-white placeholder:text-[#8299AF] placeholder:text-sm outline-none transition-all duration-300 focus:border-[#00C6FA] focus:ring-2 focus:ring-[#00C6FA]/20"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="text-sm font-medium text-[#D7E3EF]">
      Email Address
    </label>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      className="w-full h-12 rounded-lg border border-[#254B70] bg-[#0B2A4A] px-4 text-white placeholder:text-[#8299AF] placeholder:text-sm outline-none transition-all duration-300 focus:border-[#00C6FA] focus:ring-2 focus:ring-[#00C6FA]/20"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="message" className="text-sm font-medium text-[#D7E3EF]">
      Your Message
    </label>
    <textarea
      id="message"
      rows={5}
      placeholder="Tell me about your project..."
      className="resize-none w-full rounded-lg border border-[#254B70] bg-[#0B2A4A] px-4 py-3 text-white placeholder:text-[#8299AF] placeholder:text-sm  outline-none transition-all duration-300 focus:border-[#00C6FA] focus:ring-2 focus:ring-[#00C6FA]/20"
    />
  </div>

  <button
    type="submit"
    className="w-full sm:w-fit rounded-lg bg-[#00C6FA] px-8 py-3 font-semibold text-[#01192C] transition-all duration-300 hover:bg-[#38D4FF] hover:shadow-lg hover:shadow-[#00C6FA]/20 active:scale-[0.98]"
  >
    Send Message →
  </button>

</motion.form>



    </div>
  )
}

export default ContactForms
