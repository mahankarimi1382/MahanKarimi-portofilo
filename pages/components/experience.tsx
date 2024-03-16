
import { motion, Variants } from "framer-motion";

import Image from "next/image";
import { Experiences } from "./experiences";
const cardVariants: Variants = {
  offscreen: {
    y: 400
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};


export default function Experience({ inputref }: any) {
  const Showexperiences = () => {
    let mapped = Experiences.map((item) => {
      return (

        <motion.div
          key={item.id}
          className=" my-4  h-[270px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={cardVariants}>
            {item.id % 2 == 0 ? (
              <div className=" delay-75 hover:shadow-sky-600 hover:shadow-[-25px_25px_18px_-15px]   hover:ml-1 transition-all  hover:bg-slate-700 p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
                <motion.div
                  className=" min-w-60 "
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ scale: 0.8, rotate: 360 }}
                >
                  <Image className=" rounded-md w-60" src={item.img} alt="" />

                </motion.div>
                <div>{item.caption}</div>
              </div>
            ) : (
              <div className=" delay-75 hover:shadow-sky-600 hover:shadow-[-25px_25px_18px_-15px]    hover:ml-1 transition-all  hover:bg-slate-700 p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
                <div>{item.caption}</div>
                <motion.div
                  className=" min-w-60 "
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ scale: 0.8, rotate: 360 }}
                >
                  <Image className=" rounded-md w-60" src={item.img} alt="" />

                </motion.div>

              </div>
            )}


          </motion.div>
        </motion.div>
      )

    })
    return mapped
  }

  return (
    <div
      ref={inputref}
      className="">
      <motion.div

        className=" h-[100px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div onClick={() => inputref.current?.scrollIntoView({
            behavior: "smooth"
          })} className=" text-4xl text-white">experiences:</div>
        </motion.div>
      </motion.div>
      <div className=" mb-60">
        {Showexperiences()}
      </div>
    </div>

  )

}