
import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import resume from "../public/Images/resume.png"
import Image from 'next/image'

function test() {
    const reversSprings = useSpring({

        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 10 }
    })
    return (
        <div className=' bg-slate-600 w-full h-screen flex items-center justify-center bg-opacity-45'>
            <animated.div
                style={{
                    ...reversSprings
                }}>
                <div className='flex items-center justify-center w-[500px] rounded-xl bg-white h-[700px]'>
                    <Image className=' w-[95%] ' src={resume} alt='' />
                </div>
            </animated.div>
        </div>
    )
}

export default test

