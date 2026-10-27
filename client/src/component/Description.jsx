import React from 'react'
import { motion, scale } from "motion/react"
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Description = () => {
  const downloadCV = () => {
  window.location.href = "/Abu-Huraira-Shaikh-CV.pdf";
};
  return (
    // description tittle 
    <div className='w-[98%] mobile:w-[96%] mobile-lg:w-[90%] tablet:w-[88%] mx-auto border-2 border-[#254865] p-5 rounded-md'>
      <h1 className='text-white text-4xl mobile:text-5xl mobile-lg:text-6xl tablet:text-7 font-extrabold'>Hi I'am <span className='text-[#FF4C2F]'>Abu Huraira Shaikh</span></h1> <br/>
      <h2 className='text-white text-3xl mobile:text-4xl mobile-lg:text-4xl tablet:text-5 font-extrabold'>I'am Professional 

         

             <TypeAnimation
          sequence={[
            " Full Stack Developer",
            1500,
            " MERN Stack Developer",
            1500,
            " Frontend Developer",
            1500,
            " Freelance Web Developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={65}
          repeat={Infinity}
          className="bg-gradient-to-r from-[#00C6FA] to-[#7DE5FF] bg-clip-text text-transparent"

        />
         </h2> <br/>
         {/* description body */}
         <h5 className='text-md mobile:text-2xl tablet:text-3xl text-[#D7E3EF] font-semibold'>
I'm a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with a strong foundation in building dynamic, scalable, and user-friendly web applications.
I enjoy solving complex problems, learning new technologies, and continuously improving my skills through real-world projects.
         </h5>
{/* all the button */}
         <div className='mt-3'>
            <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{scale:1.1}}
            transition={{ duration: 0.5 }}
            onClick={downloadCV}
            className=' text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md mr-5 hover:bg-[#00C6FA]'>Download CV</motion.button>

            <motion.button
initial={{ opacity: 0, y: -10 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{scale:1.1}}
transition={{ duration: 0.5 }}
onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
            className='text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md hover:bg-[#00C6FA]'>Contact Me</motion.button>
         </div>
         <motion.div 
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
         className='flex flex-wrap gap-2 mobile-lg:gap-3 mt-5'>
          <button className='bg-[#00C6FA] hover:bg-[#FF4C2F] p-2 rounded-md'> <a href="https://www.facebook.com/AbuHurairaShaikhWB" target='_blank' rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={35} /></a></button>
          <button className='bg-[#00C6FA] hover:bg-[#FF4C2F] p-2 rounded-md'> <a href="https://www.linkedin.com/in/abu-huraira-shaikh-developer/"  target='_blank' rel="noopener noreferrer"  aria-label="LinkedIn"><FaLinkedinIn size={35} /></a></button>
          <button className='bg-[#00C6FA] hover:bg-[#FF4C2F] p-2 rounded-md'> <a href="https://github.com/developer-abu"  target='_blank' rel="noopener noreferrer"  aria-label="GitHub"><FaGithub size={34}/></a></button>
         </motion.div>
    </div>
  )
}

export default Description
