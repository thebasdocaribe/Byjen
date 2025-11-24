import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/navLink';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon, description}) => {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 
        index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
          className="bg-[#161030] rounded-[20px] 
          py-4 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
           <p className="text-[#aaa6c3] text-center text-[14px] leading-[20px]">
            {description}
          </p>
        </div>

      </motion.div>
    </Tilt>
  )
} 

const Cards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Cada gesto cuenta</p>
        <h2 className={styles.sectionHeadText}
        >CREADORES E INFLUENCERS.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-[17px]
        max-w-3xl leading-[30px]"
      >
        Aquí encontrarás contenido exclusivo para influencers y creadores de contenido
      </motion.p>

      <div className='mt-10 grid-cols-3 grid gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (Cards, "cards")
