
import { motion } from "motion/react"
import ProItems from "../ProItems/ProItems"
import { useContext } from "react"
import AppContext from "../../context/AppContext"

const Projects = () => {

  const ak = useContext(AppContext);

  return (
    <>
    <motion.section 
        initial="hidden"
        animate="show"
        id="projects" 
        className="py-20 xl:py-10 container  h-full bg-secondaryDark text-white  flex flex-col justify-evenly items-center border-bgDark border-2 hover:border-primaryDark rounded-md shadow-2xl">
        <h1 className=" text-3xl uppercase font-bold text-primaryDark">Projects</h1>

        <motion.div 
        
             className=" w-full group flex flex-col justify-center items-center  ">
                <div className=" w-full my-3  px-5 py-3">
                    <h1 className="text-2xl group-hover:text-primaryDark font-bold font-mono mx-5 my-4 px-5 py-3 rounded-lg bg-secondaryLight">Mern Stack Projects</h1>
                </div>
                <div className=" w-full flex flex-wrap justify-evenly items-center gap-10 px-5 xl:px-10 py-3">
                    {
                        (ak !== undefined ? ak.projects?.map((item)=><ProItems key={item._id} item={item} />): <h1 className="w-full text-center font-bold text-2xl">Loading</h1>)
                    }
                </div>
        </motion.div>

        <motion.div 
             className=" w-full group flex flex-col justify-center items-center ">
                <div className=" w-full my-3  px-5 py-3">
                    <h1 className="text-2xl group-hover:text-primaryDark font-bold font-mono mx-5 my-4 px-5 py-3 rounded-lg bg-secondaryLight">Frontend/Backend Projects</h1>
                </div>
                <div className=" w-full flex flex-wrap justify-evenly items-center gap-10 px-10 py-3">
                    {
                        (ak !== undefined ? ak.projects?.map((item)=><ProItems key={item._id} item={item} />): <h1 className="w-full text-center font-bold text-2xl">Loading</h1>)
                    }
                </div>
        </motion.div>
        </motion.section>
    </>
  )
}

export default Projects