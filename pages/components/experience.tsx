
import { motion, Variants } from "framer-motion";
import img1 from "../../public/Images/Image1.jpg"
import Image from "next/image";
import img2 from "../../public/Images/Image2.jpg"
import img3 from "../../public/Images/image3.jpg"
import img4 from "../../public/Images/image4.jpg"
import img5 from "../../public/Images/image5.jpg"
import img6 from "../../public/Images/image6.jpg"
import img7 from "../../public/Images/image7.jpg"
import img8 from "../../public/Images/img8.jpg"
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




export default function Experience() {

  return (
    <div className=" -mt-30">
      <motion.div
        className=" h-[100px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" text-4xl text-white">experiences:</div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <div>Developed high-quality user interfaces for web applications
              using React.js, focusing on creating responsive and userfriendly client-side applications.</div>
            <Image className=" w-60" src={img1} alt="" />

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg gap-16 flex justify-between text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <Image className=" w-60" src={img2} alt="" />

            <div>Managed application state using state management libraries
              such as Redux and Context API, enhancing accessibility, and
              efficiency of data flow across the components.</div>

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <div>Proficient in utilizing React hooks to handle component
              lifecycle events and state management.</div>
            <Image className=" w-60" src={img3} alt="" />

          </div>
        </motion.div>

      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg gap-16 flex justify-between text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <Image className=" w-60" src={img4} alt="" />

            <div>Incorporated TypeScript for improved code reliability and static
              type checking.
            </div>

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <div>Leveraged Tailwind CSS for rapid UI development, resulting in
              more streamlined styling processes and faster project
              turnaround.</div>
            <Image className=" w-60" src={img5} alt="" />

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg gap-16 flex justify-between text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <Image className=" w-60" src={img6} alt="" />

            <div>Utilized a variety of packages and libraries to meet project
              requirements and improve functionality, demonstrating a good
              grasp of the React ecosystem.
            </div>

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <div>Implemented forms using React Hook Form to manage form
              state and validation, enhancing user experience and form
              handling efficiency.</div>
            <Image className=" w-60" src={img7} alt="" />

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg gap-16 flex justify-between text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <Image className=" w-60" src={img8} alt="" />

            <div>Incorporated TypeScript for improved code reliability and static
              type checking.
            </div>

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[270px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg flex gap-2 text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <div>Developed high-quality user interfaces for web applications
              using React.js, focusing on creating responsive and userfriendly client-side applications.</div>
            <Image className=" w-60" src={img1} alt="" />

          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" h-[400px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <div className=" p-3 rounded-lg gap-16 flex justify-between text-2xl bg-slate-600 bg-opacity-30 items-center text-white">
            <Image className=" w-60" src={img4} alt="" />

            <div>Incorporated TypeScript for improved code reliability and static
              type checking.
            </div>

          </div>
        </motion.div>
      </motion.div>

    </div>

  )

}