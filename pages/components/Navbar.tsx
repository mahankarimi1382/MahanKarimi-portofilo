import Link from 'next/link'
import React from 'react'

function Navbar({ navbarMove, inputref }: any) {

    return (
        <nav className={navbarMove ? 'duration-[1100ms] ease-in-out delay-500 -ml-[73.5%] mt-20 z-10 transition-all text-sky-400 px-12 bg-opacity-65 fixed gap-8 h-16 justify-end   w-full flex' : 'duration-1000 delay-200  transition-all z-10  text-white px-12 bg-opacity-65 fixed gap-8 h-16 justify-end w-full flex'}>
            <button className={navbarMove ? "hover:text-white" : ' hover:text-sky-400'}>About</button>

            <button onClick={() => inputref.current?.scrollIntoView({
                behavior: 'smooth'
            })} className={navbarMove ? "hover:text-white" : ' hover:text-sky-400'} >Experience</button>
            <button className={navbarMove ? "hover:text-white" : ' hover:text-sky-400'} >Resume</button>
            <button className={navbarMove ? "hover:text-white" : ' hover:text-sky-400'}>Contact</button>
        </nav>
    )
}

export default Navbar