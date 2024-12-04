import { motion } from "motion/react"
const ProItems = (prop) => {

    const {item} = prop
  return (
    <>
    <motion.div whileHover={{scale:1.1}} className="xl:w-[300px] group-[dd] hover:border-primaryDark w-full bg-bgDark p-0 rounded-md shadow-xl gap-2 border-2 border-gray-800 font-bold flex flex-col justify-between items-center">

        <div className="flex flex-row xl:flex-col">
        <img className="  w-[300px] h-[300px]" src={item.src} alt={item.title} />
        <div className="w-full flex p-2 text-wrap flex-col justify-center items-center">
        <h1 className="text-2xl">{item.title}</h1>
        {/* <p className=" font-semibold">{item.desc}</p> */}
        </div>
        </div>
        <div className=" w-full  bg-secondaryDark p-2 gap-2 flex flex-row justify-between items-center">
        <button className="w-full rounded-md shadow-md text-xl py-2 px-4 bg-bgDark ">
            GitHub
        </button>
        <button className="w-full rounded-md shadow-md text-xl py-2 px-4 bg-bgDark ">
            View
        </button>
        </div>
    </motion.div>
    </>
  )
}

export default ProItems