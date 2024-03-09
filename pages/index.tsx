import { FaLinkedin } from "react-icons/fa6";
import Navbar from "./components/Navbar"
import { animated, useSpring } from '@react-spring/web'
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMui } from "react-icons/si";

import profile from "../public/Images/Profile.jpeg"
import Image from "next/image";
import App from "./components/experience";
import Experience from "./components/experience";
export default function Home() {
  const springs = useSpring({

    from: { opacity: 0, x: -100, y: 100 },
    to: { opacity: 1, x: 10, y: 0 },
  })
  const reversSprings = useSpring({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 10 }
  })


  return (

    <div className="   bg-slate-950 flex flex-col justify-between">
      <div className=" h-16">
        <Navbar />
      </div>

      <div className="flex">
        <div className="w-[35%] ">
          <div className=" text-white fixed h-screen w-[35%]">
            <div className=" flex flex-col gap-3 items-start justify-center pl-8 absolute z-10 top-[-65px] w-[80%] h-full bg-slate-950 ">
              <animated.div
                style={{
                  ...reversSprings
                }}>
                <h1 className=" font-semibold hover:text-[103px] transition-all h-48 text-8xl" >MAHAN KARIMI</h1>
                <p className=" text-3xl text-sky-300">Front-End Developer</p>
              </animated.div>
              <animated.div
                className="flex flex-col gap-2"
                style={{
                  ...springs
                }}>
                <p>Hey! How nice of you to look at my personal site, Thank you!.</p>
                <button className=" w-1/3 border-2 p-2 flex items-center justify-center transition-all rounded-sm hover:bg-sky-300 hover:text-black">view resume</button>
              </animated.div>
              <animated.div
                className="flex flex-col gap-2"
                style={{
                  ...reversSprings
                }}>
                <div className="flex items-center gap-2 text-[16px]">
                  <FaPhoneAlt className=" text-2xl" />
                  09305485308
                </div>
                <div className="flex items-center gap-2 text-[16px]">
                  <MdEmail className=" text-2xl" />
                  13mahankarimi82@gmail.com
                </div>
                <div className=" mt-5 flex gap-3 text-2xl">
                  <FaLinkedin className=" hover:text-sky-300" />
                  <FaGithub className=" hover:text-sky-300" />
                </div>
              </animated.div>

            </div>
            <div className=" bottom-10 -right-5 absolute rounded-full w-[170%] h-[800px] border-[3px] border-sky-300 whitespace-normal">
            </div>
          </div>
        </div>
        <div className=" p-12 flex flex-col text-white w-[65%]">
          <div className="flex">
            <div className=" w-2/3">
              <animated.div
                style={{
                  ...reversSprings
                }}>
                <h1 className=" text-6xl font-semibold">What I Do?</h1>
              </animated.div>
              <animated.div

                style={{
                  ...springs,
                }}
              >
                <p className=" leading-8 tracking-wide">
                  I am a frontend developer I have successfully completed a
                  published projects by tackling a variety of challenges. I
                  always welcome the opportunity to face new challenges.

                </p>
              </animated.div>
              <animated.div

                style={{
                  ...reversSprings,
                }}
              >
                <div className=" w-3/4 flex gap-4 mt-20 flex-col">
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-center ">
                      <RiJavascriptFill className=" text-sky-300 text-2xl" />
                      Javascript (ES6+)
                    </div>
                    <div className=" flex gap-2 items-center w-28 ">
                      <IoLogoReact className=" text-sky-300 text-2xl" />
                      React
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-center ">
                      <BiLogoTypescript className=" text-sky-300 text-2xl" />
                      Typescript
                    </div>
                    <div className=" flex gap-2 items-center w-28 ">
                      <SiNextdotjs className=" text-sky-300 text-2xl" />
                      Next js
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-center ">
                      <SiRedux className=" text-sky-300 text-2xl" />
                      Redux
                    </div>
                    <div className=" flex gap-2 items-center w-28 ">
                      <SiTailwindcss className=" text-sky-300 text-2xl" />
                      Tailwind css
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-center ">
                      <FaGitAlt className=" text-sky-300 text-2xl" />
                      Git
                    </div>
                    <div className=" flex gap-2 items-center w-28">
                      <SiMui className=" text-sky-300 text-2xl" />
                      MUI
                    </div>
                  </div>
                  <div className=" font-medium">
                    Makeen ideal media
                    <br />
                    2023-present
                  </div>
                </div>
              </animated.div>
            </div>
            <div className=" flex items-center h-screen justify-center w-1/3">
              <animated.div

                style={{
                  ...reversSprings,
                }}
              >
                <Image className=" ml-5 mb-64 rounded-xl " alt="" src={profile} />

              </animated.div>

            </div>
          </div>
          <Experience />

        </div>
      </div>

    </div>
  );
}
