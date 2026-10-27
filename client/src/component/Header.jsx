import React from 'react'
import { motion, scale } from "motion/react"
const Header = () => {
  return (
        <header className='w-full '>
            {/* use of the banner photo according to width */}
        <div className='w-full mobile:w-[85%] mobile-lg:w-[75%] tablet:w-[60%] mx-auto rounded-md p-1.5'>
<motion.img src='/banner.webp' alt="Abu Huraira Shaikh" 
// animation set up for banner img 
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{scale:0.9}}
transition={{ duration: 0.5 }}
className='rounded-md loading="lazy"'/>

<motion.div 
// animation set up for logo img 

initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{scale:1.2}}
transition={{ duration: 0.7 }}
className='h-30 w-30 mx-auto my-2 rounded-full'>
    <img src="profile.webp" alt="Abu Huraira Shaikh" className='rounded-full loading="lazy"' />
</motion.div>
        </div>
    </header>
  )
}

export default Header
