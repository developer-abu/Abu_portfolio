import React from 'react'
import { motion, scale } from "motion/react"
import { FaReact, FaNodeJs } from "react-icons/fa";
import {SiExpress,SiMongodb,SiTailwindcss,SiJsonwebtokens, SiJavascript} from "react-icons/si";
const ShowProject = () => {
  return (
    <div className='w-full mobile:w-[99%] mobile-lg:w-[90%] tablet:w-[88%] mx-auto mt-5 border-2 border-[#254865] py-5 px-3 rounded-md'>

<h2 className='text-white text-4xl mobile:text-5xl mobile-lg:text-6xl tablet:text-7 font-extrabold'>Projects to be <span className='text-[#FF4C2F]'>Shown</span></h2> <br/>
{/* heading above  */}
{/* below hr line  */}
<hr className='hr_animated'/> <br/>

<div className='w-full flex flex-wrap justify-between items-center'>

        {/* 1st project container */}
      <motion.div
       initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{scale:0.95}}
        transition={{ duration: 0.5 }}
      className='w-full tablet:w-[50%]'>
        <div className='p-5 rounded-md w-full'>
<img src="/v1.webp" alt="" 
className='h-50 mobile-lg:h-100 w-full rounded-md' />
        </div>
        <div>
          <div className='px-3'>
              <h2 className='text-[#FF4C2F] font-bold'> BizTrack <span className='text-white'> A Full Stack Business Management Web Application</span> </h2>
               <div className='rounded-4xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,198,250,0.22),transparent_65%),linear-gradient(135deg,#01192C,#032441)] p-2 m-2 flex justify-between'>

<FaReact className="size-7 text-[#61DAFB] " />
<FaNodeJs className="size-7 text-[#68A063] " />
<SiExpress className="size-7 text-[#F8FAFC] " />
<SiMongodb className="size-7 text-[#47A248] " />
<SiTailwindcss className="size-7 text-[#06B6D4] " />
<SiJavascript className="size-7 text-[#F7DF1E] " />
<SiJsonwebtokens className="size-7 text-[#00C6FA] " />

              </div>
          </div>
          <div>

          </div>
<div className='flex justify-between p-5'>
<button  className=' text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md mr-5 hover:bg-[#00C6FA]'>Live Demo</button>
<button  className=' text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md mr-5 hover:bg-[#00C6FA]'>GitHub Repo</button>
</div>
        </div>
      </motion.div>

 {/* 2nd project container */}
      <motion.div 
       initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{scale:0.95}}
        transition={{ duration: 0.5 }}
      className='w-full tablet:w-[50%]'>
      <div className='p-5 rounded-md w-full'>
<img src="/v7.webp" alt="" 
className='h-50 mobile-lg:h-100 w-full rounded-md' />
        </div>

        <div>
            <div className='px-3'>
              <h2 className='text-[#FF4C2F] font-bold'> Velora <span className='text-white'> A Perfume Brand Website</span> </h2>
              <div className='rounded-4xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,198,250,0.22),transparent_65%),linear-gradient(135deg,#01192C,#032441)] p-2 m-2 flex justify-between'>

<FaReact className="size-7 text-[#61DAFB] " />
<SiTailwindcss className="size-7 text-[#06B6D4] " />
<SiJavascript className="size-7 text-[#F7DF1E] " />


              </div>
          </div>
<div className='flex justify-between p-5'>
<button  className=' text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md mr-5 hover:bg-[#00C6FA]'>Live Demo</button>
<button  className=' text-white bg-[#FF4C2F] max-[300px]:text-xs px-2 py-2 mobile:px-3 mobile:py-3 rounded-md mr-5 hover:bg-[#00C6FA]'>GitHub Repo</button>
</div>
        </div>

      </motion.div>

</div>


    </div>
  )
}

export default ShowProject
