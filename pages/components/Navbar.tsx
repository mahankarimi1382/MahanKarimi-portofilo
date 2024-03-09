import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className=' z-10 bg-slate-950 text-white px-12 bg-opacity-65 fixed gap-8 h-16 justify-end w-full flex'>
            <button className=' hover:text-sky-400'>About</button>
            <button className=' hover:text-sky-400' >Experience</button>
            <button className=' hover:text-sky-400' >Resume</button>
            <button className=' hover:text-sky-400'>Contact</button>

        </nav>
    )
}

export default Navbar