
import ProfileCard from "../ProfileCard/ProfileCard"
import { motion } from "motion/react"
import { useContext } from "react"
import AppContext from "../../context/AppContext"
const AboutMe = () => {

const ak= useContext(AppContext);


  return (
    <>
    <motion.section 
        initial="hidden"
        animate="show"
        id="aboutme" 
        className=" container h-full xl:h-dvh bg-secondaryDark flex justify-center items-center border-bgDark border-2 hover:border-primaryDark rounded-md shadow-2xl">
        <div  className=" w-dvw my-20 xl:my-10 text-white flex flex-col gap-10 xl:flex-row justify-center items-center">
            
            <motion.section 
            
             className=" w-full xl:w-[50%] my-8">
                <ProfileCard/>
            </motion.section>

            <motion.section 
             className=" w-full flex-col xl:w-[50%] mt-5 flex justify-center items-center ">
                <motion.div
             
                className=" w-full xl:w-[600px] select-none flex flex-col justify-center items-center py-10  gap-9">
                    <h1 className="text-5xl text-white hover:text-primaryDark dark:text-white text-center font-bold">About Me</h1>
                    <p className="px-6 text-lg font-semibold text-white hover:text-primaryDark dark:text-white text-pretty">{ak.ak.about}</p>
                </motion.div>
                <motion.div
                    className=" w-full xl:w-[600px] flex flex-row flex-wrap justify-evenly items-center"
                >

{ak.merns.map(item=>(
                    <motion.div 
                    whileHover={{scale:1.2}}
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
        </div>
    </motion.section>
    </>
  )
}

export default AboutMe