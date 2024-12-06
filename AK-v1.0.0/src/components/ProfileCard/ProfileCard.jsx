import { useContext } from "react";
import AppContext from "../../context/AppContext";
import akp from '../../assets/ak.png'
import { motion } from "motion/react";

const ProfileCard = () => {
  
    const ak = useContext(AppContext);
    
    return(<>
    <motion.div 
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{duration:1, ease:"easeOut", delay:0.30}}
    style={{border:"1px solid black"}} 
    className=" w-full sm:w-[500px] mx-auto flex flex-col justify-between items-center rounded-md">
                    <div className=" w-full bg-black p-4 flex flex-row justify-between items-center rounded-t-md">
                        <div >
                        <h2 id="email" className="text-md font-bold text-white hover:text-primaryDark dark:text-white">
                            {ak.ak.email}
                            </h2>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="w-5 h-5 cursor-pointer bg-[#FB4644] rounded-full"></span>
                            <span className="w-5 h-5 cursor-pointer bg-[#FCBE2A] rounded-full" ></span>
                            <span className="w-5 h-5 cursor-pointer bg-[#29C841] rounded-full" ></span>

                        </div>
                    </div>
                    <div className=" bg-gray-100">
                        <img className=" grayscale z-0" src={akp} alt="ak" />
                    </div>
                    <div className="w-full rounded-b-md">
                       <button className="w-full h-[50px] font-bold text-white hover:text-primaryDark bg-black rounded-b-md">Resume Download</button> 
                    </div>
                </motion.div>
    </>)
  };

export default ProfileCard