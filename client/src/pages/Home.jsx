import React from 'react'
import Header from '../component/Header'
import Description from '../component/Description'
import SkillIcon from '../component/SkillIcon'
import ShowProject from '../component/ShowProject'
import ContactForms from '../component/ContactForms'
import Footer from '../component/Footer'
const Home = () => {
  return (
<div className='overflow-x-clip bg-[linear-gradient(135deg,#01192C_0%,#032441_50%,#072C50_100%)]'>
  <Header/>
  <Description/>
  <SkillIcon/>
  <ShowProject/>
  <ContactForms/>
  <Footer/>
</div>
  )
}

export default Home
