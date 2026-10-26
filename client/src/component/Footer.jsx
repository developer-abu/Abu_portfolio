import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='w-[98%] mobile:w-[96%] mobile-lg:w-[90%] tablet:w-[88%] mx-auto border-2 border-[#254865] p-5 rounded-md mt-5'>

<h2 className='text-white text-4xl mobile:text-5xl mobile-lg:text-6xl tablet:text-7 font-extrabold'> Reach <span className='text-[#FF4C2F]'>Me</span> </h2>
<hr className='hr_animated mt-2'/> <br/>

      <div className='w-full flex justify-between font-bold'>

  <div className='bg-[#103B63] text-[#D7E3EF] rounded-md p-4 w-[45%] text-center'>
            <p className='text-sm text-[#FF4C2F]'>Email</p>
            <h4 className='break-all'>hurairaofficialonly@gmail.com</h4>
            
        </div>
        <div className='bg-[#103B63]  text-[#D7E3EF] rounded-md p-4 w-[45%] text-center'>
              <FaMapMarkerAlt className="text-xl text-[#00C6FA] inline" />
            <address className='inline'>West Bengal, India</address>
           
        </div>

      </div>

        <div className='bg-[#103B63]  text-[#D7E3EF] rounded-md p-4 text-center mt-2'>
      <h3>This Site Is Developed By Developer <span className='text-[#FF4C2F]'>Abu Huraira Shaikh</span> </h3>
      <h3>© {currentYear} <span className='text-[#FF4C2F]'>Abu Huraira Shaikh</span> . All Right Reserved</h3>
           
        </div>
    </div>
  )
}

export default Footer
