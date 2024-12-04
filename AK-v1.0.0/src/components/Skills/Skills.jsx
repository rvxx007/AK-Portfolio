import { motion} from "motion/react"

import SkillsItem from "../SkillsItem/SkillsItem"
import { useContext} from "react"
import AppContext from "../../context/AppContext"

const Skills = () => {
  
    const ak = useContext(AppContext);

    const parentSectionVariants ={
        hidden:{opacity:0},
        show:{
            opacity: 1,
            transition: {
                staggerChildren: 0.40,
            },
        },
    }
    
    const childrenSectionVariants = {hidden:{opacity:0}, show:{opacity:1}}
    
  return (
    <>
     <motion.section  variants={parentSectionVariants}
        initial="hidden"
        animate="show"
        id="skills" 
        className=" container h-full bg-secondaryDark text-white flex flex-col justify-evenly py-10 items-center border-bgDark border-2 hover:border-primaryDark rounded-md shadow-2xl">
        <h1 className=" text-3xl uppercase font-bold text-primaryDark">Skills</h1>

        <motion.div 
             
             className=" w-full group flex flex-col justify-center items-center ">
                <div className=" w-full my-3  px-5 py-3">
                    <h1 className="text-2xl group-hover:text-primaryDark font-bold font-mono mx-5 my-4 px-5 py-3 rounded-lg bg-secondaryLight">Languages</h1>
                </div>
                <div className=" w-full flex flex-wrap justify-start gap-10 px-10 py-3">
                    {
                        (ak !== undefined ? ak.skills?.map((item)=><SkillsItem key={item._id} item={item} type="lang" />): <h1 className="w-full text-center font-bold text-2xl">Loading</h1>)
                    }
                </div>
        </motion.div>

        <motion.div 
            variants={childrenSectionVariants}
             className=" w-full group flex flex-col justify-center items-center ">
                <div className=" w-full my-3  px-5 py-3">
                    <h1 className="text-2xl group-hover:text-primaryDark font-bold font-mono mx-5 my-4 px-5 py-3 rounded-lg bg-secondaryLight">Frontend</h1>
                </div>
                <div className=" w-full flex flex-wrap justify-start gap-10 px-10 py-3">
                    {
                        (ak !== undefined ? ak.skills?.map((item)=><SkillsItem key={item._id} item={item} type="frontend" />): <h1 className="w-full text-center font-bold text-2xl">Loading...</h1>)
                    }
                </div>
        </motion.div>

        <motion.div 
            variants={childrenSectionVariants}
             className=" w-full flex flex-col justify-center items-center group ">
                <div className=" w-full my-3  px-5 py-3">
                    <h1 className="text-2xl group-hover:text-primaryDark font-bold font-mono mx-5 my-4 px-5 py-3 rounded-lg bg-secondaryLight">Backend</h1>
                </div>
                <div className=" w-full flex flex-wrap justify-start gap-10 px-10 py-3">
                    {
                        (ak !== undefined ? ak.skills?.map((item)=><SkillsItem key={item._id} item={item} type="backend" />) : <h1 className="w-full text-center font-bold text-2xl">Loading...</h1>)
                    }
                </div>
        </motion.div>

        </motion.section>
    </>
  )
}

export default Skills