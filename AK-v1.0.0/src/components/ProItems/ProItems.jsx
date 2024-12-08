import { motion } from "motion/react"
const ProItems = (prop) => {

    const {item, proType} = prop
  return (
    <>
    {item.proType===proType &&
      <motion.div whileHover={{scale:1.1}} className="md:w-[300px] group  w-full bg-bgDark p-0 rounded-md shadow-xl gap-2 border-2 hover:border-primaryDark border-gray-800 font-bold flex flex-col justify-between items-center">

      <div className="flex flex-col">
      <img className="w-[300px] h-[300px]" 
      src={import.meta.env.VITE_BE_BASE_URL+item.icon} alt={item.title} />
      <div className="w-full flex p-2 text-wrap flex-col justify-center items-center">
      <h1 className="text-2xl">{item.title}</h1>
      {/* <p className=" font-semibold">{item.desc}</p> */}
      </div>
      </div>
      <div className=" w-full bg-secondaryDark p-2 gap-2 flex flex-row justify-between items-center">
      <a href={item.gitlink} target="_blank" className="w-full text-center cursor-pointer border-2 hover:border-primaryDark border-slate-950 rounded-md shadow-md text-xl py-2 px-4 bg-bgDark ">
          GitHub
      </a>
      <a href={item.livelink} target="_blank" className="w-full text-center cursor-pointer border-2 hover:border-primaryDark border-slate-950 rounded-md shadow-md text-xl py-2 px-4 bg-bgDark ">
          View
      </a>
      </div>
  </motion.div>
    }
    </>
  )
}

export default ProItems