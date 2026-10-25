import React from 'react'
import { motion} from "motion/react"

import {SiHtml5,SiJavascript,SiReact,SiTailwindcss,SiRedux,SiNodedotjs,SiExpress,SiMongodb,SiMongoose,SiJsonwebtokens,SiGit,SiGithub,SiPostman,SiVite,SiNpm,
} from "react-icons/si";

import {FaCss3Alt} from "react-icons/fa"

const SkillIcon = () => {

  const technologies = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Mongoose", Icon: SiMongoose },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Postman", Icon: SiPostman },
  { name: "Vite", Icon: SiVite },
  { name: "npm", Icon: SiNpm },
];



  return (

<div className='w-full mobile:w-[85%] mobile-lg:w-[75%] tablet:w-[55%] mx-auto mt-5 border-2 border-[#254865] p-5 rounded-md'>
<h2 className='text-white text-4xl mobile:text-5xl mobile-lg:text-6xl tablet:text-7 font-extrabold'>Skilled <span className='text-[#FF4C2F]'>In</span></h2> <br/>
{/* heading above  */}
{/* below hr line  */}
<hr className='hr_animated'/> <br/>

<motion.div 

initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className='flex flex-wrap items-center gap-3 justify-between'>

{technologies.map(({ name, Icon }) => (
        <div
          key={name}
          className="rounded-xl border border-[#163B59] bg-[#072C50] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00C6FA]"
        >
          <Icon className="size-9 text-[#00C6FA]" />
        </div>
      ))}

 </motion.div>
    </div>
  )
}

export default SkillIcon
