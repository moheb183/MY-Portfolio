import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} 
      absolute  top-[px] mx-w-7xl mx-auto
       flex flex-row  inset-0 items-start gap-5`}>
        <div className=' mt-5 flex flex-col justify-center items-center'>
          <div className=' w-5 h-5  rounded-full  bg-[#905eff]' />
          <div className=' w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div className={`${styles.heroHeadText}`}>
          <h1>Hi I'm <span className='text-[#905eff]'>Moheb</span></h1>
          <p className={`${styles.heroSubText}`}>
            i develope a 3d visuals , user interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=' absolute  xs:bottom-10 bottom-32  w-full flex justify-center items-center  '>
        <a href="#about">
          <div className=' w-[35px]  h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start  pb-5 p-2' >
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'Loop'
              }} className=' w-5 h-5 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero