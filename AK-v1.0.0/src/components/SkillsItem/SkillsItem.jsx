import { motion } from 'motion/react';
const SkillsItem = (prop) => {
    const {item, type} = prop 
  return (
    <>
    {item.skillType === type && <motion.div
     whileHover={{scale:1.2}}
    className='px-3 py-2 flex justify-between items-center gap-3 shadow-md rounded-md bg-secondaryLight border-2 border-slate-900 hover:border-primaryDark'>
        <img src={"http://localhost:4224"+item.icon} alt={item.title} 
        className='w-[45px] h-[45px] rounded-xl' />
        <h1 className='text-xl font-bold'>{item.title}</h1>

    </motion.div>}
    
    </>
  )
}

export default SkillsItem