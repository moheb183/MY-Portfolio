import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants';
import { menu } from '../assets'
import { close } from '../assets'
import logo from '../assets/freepik-undefined-202410281500136Se5.png'
import { li } from 'framer-motion/client';



const Navbar = () => {
  const [active, setactive] = useState("")
  const [Toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX}  flex  items-center w-full  top-0 z-20 py-5 bg-primary`}>
      <div className=' w-full items-center flex justify-between mx-auto max-w-7xl'>
        <Link to={"/"} className=' flex items-center ' onClick={() => {
          setactive("")
          window.scrollTo(0, 0)
        }}>

          <img src={logo} alt="logo" className=' w-12 h-12 object-contain' />
          <p className='text-white text-[18px] cursor-pointer flex font-bold'>Moheb | Youssry </p>
        </Link>
        <ul className='  list-none gap-10  flex-row sm:flex hidden '>

          {navLinks.map(link => (
            <li key={link.id} className={`${active === link.title ? "text-white"
              : "text-secondary"} hover:text-white cursor-pointer text-[18px] font-medium`}
              onClick={() => setactive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}


        </ul>

        <div className='sm:hidden flex  flex-1 justify-end items-center'>
          <img src={Toggle ? close : menu} alt="menu" className=' w-[28px] h-[28px] cursor-pointer object-contain'
            onClick={() => { setToggle(!Toggle) }} />
        </div>

        <div className={` ${!Toggle ? "hidden" : "flex"}
         p-6 black-gradient absolute top-20 right-0 mx-4
          my-2 min-w-[140px] rounded-xl z-10`}>

          <ul className='  list-none gap-4 flex flex-col justify-end items-start   '>

            {navLinks.map(link => (
              <li key={link.id} className={`${active === link.title ? "text-white"
                : "text-secondary"} font-poppins cursor-pointer text-[16px] font-medium`}
                onClick={() => {
                  setToggle(!Toggle)
                  setactive(link.title)
                }}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

          </ul>



        </div>

      </div>

    </nav >
  )
}

export default Navbar