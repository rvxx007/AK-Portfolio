import { useContext } from "react"
import AppContext from "../../context/AppContext"
import ProfileCard from "../ProfileCard/ProfileCard";
import { motion } from "motion/react";

const Intro = () => {
const ak = useContext(AppContext);

 const parentSectionVariants ={
    hidden:{opacity:0},
    show:{
        opacity: 1,
        transition: {
            staggerChildren: 0.50,
        },
    },
}

const childrenSectionVariants = {hidden:{opacity:0}, show:{opacity:1}}

    return (
    <>
    <motion.section variants={parentSectionVariants}
        initial="hidden"
        animate="show"
        id="intro" 
        className=" container h-full py-10 bg-secondaryDark flex justify-center items-center border-bgDark border-2 hover:border-primaryDark rounded-md shadow-2xl">
        <div  className=" w-dvw text-white flex flex-col gap-10 xl:flex-row justify-center items-center">
            <motion.section 
            variants={childrenSectionVariants}
             className=" w-full flex-col xl:w-[50%] mt-5 flex justify-center items-center ">
                <motion.div
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:1, ease:"easeOut", delay:0.30}}
                className=" w-full xl:w-[600px] select-none flex flex-col justify-center items-center py-10  gap-9">
                    <h1 className="text-5xl text-white hover:text-primaryDark dark:text-white text-center font-bold">{ak.ak.intro.headTitle}</h1>
                    <p className="px-6 text-white hover:text-primaryDark dark:text-white text-pretty">{ak.ak.intro.headSub}</p>
                </motion.div>
                <motion.div
                    initial={{opacity:0 , x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:1, ease:"easeOut", delay:0.30}}
                    variants={parentSectionVariants}
                    className=" w-full xl:w-[600px] flex flex-row flex-wrap justify-evenly items-center"
                >

                   {ak.merns.map(item=>(
                    <motion.div 
                    whileHover={{scale:1.2}}
                    variants={childrenSectionVariants}
                    key={item.title}
                    className={`p-2 bg-bgDark shadow-xl rounded-md flex justify-center items-center flex-col gap-1 border-2 ${item.bc} group hover:border-primaryDark`}>
                    <div>
                    <img src={import.meta.env.VITE_BE_BASE_URL+item.icon} alt={item.title} className="w-[60px] h-[60px] p-1" />
                    </div>
                    <span className={`font-bold ${item.tc} group-hover:text-primaryDark font-mono text-2xl`}>{item.title}</span>
                   </motion.div>
                   ))} 
                   
                </motion.div>
            </motion.section>
            <motion.section 
            variants={childrenSectionVariants}
             className=" w-full xl:w-[50%] my-8 px-5">
                <ProfileCard/>
            </motion.section>
        </div>
    </motion.section>
    </>
  )
}

export default Intro