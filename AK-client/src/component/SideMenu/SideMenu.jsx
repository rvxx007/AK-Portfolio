import { useState } from 'react';
import close from '../../img/close.svg';
const SideMenu = () => {

    const [isVisible, setIsVisible] = useState(false);

   const handleClose = ()=>{
    if(isVisible===true){
        setIsVisible(false);
    }else{
        setIsVisible(true);
    }
   } 
  return (
    <div id='sideMenuDiv' className={`${(!isVisible?"flex":"hidden")}`+" sideMenu z-20 h-full w-full bg-white shadow-2xl absolute rounded-2xl "}>
        <div  className='flex justify-end items-center'>
                <img onClick={handleClose}  className='p-3 shadow-2xl rounded-2xl cursor-pointer' src={close} alt="Close" />
        </div>
        <div  
        className="side-menu h-full m-auto flex justify-center items-center">
            <ul  className="w-[50%] flex flex-col text-black text-center my-auto text-5xl z-20 font-bold gap-20"> 
                <li><a className=' cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#home">Home</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#services">Services</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#skills&tools">Skills</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#projects">Projects</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#about">About</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default SideMenu