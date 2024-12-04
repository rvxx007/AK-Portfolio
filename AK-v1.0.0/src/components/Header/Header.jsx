import { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import AppContext from '../../context/AppContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [isVisible , setIsVisible] = useState(false);
    const ak = useContext(AppContext);

    const toggle = (e)=>{
        e.preventDefault();

        if(isVisible){
            setIsVisible(false);
        }else{
            setIsVisible(true);
        }
    }

    const liTC= 'w-[150px] h-[60px] select-none px-4 py-3 text-center text-white hover:text-primaryDark rounded-full hover:bg-gray-900 hover:border-2 hover:border-primaryDark cursor-pointer'
    const hmListItem = 'w-full z-100 p-3 text-center text-white hover:text-primaryDark rounded-full hover:bg-gray-900 hover:border-2 hover:border-primaryDark ';
  return (
    <>
    <header className=" fixed z-50 w-full py-3 px-6 xl:px-0 xl:h-[80px] flex-col flex justify-center items-center font-sans text-primaryDark bg-bgDark ">
        <nav  className=' container w-full flex flex-row justify-between items-center my-auto '>
        <section className="w-full xl:w-[50%] h-full flex justify-start items-center  gap-5 ">
            <img className='w-[60px] h-[60px] rounded-full' src={logo} alt="Logo" />
            <div className=' relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-bgDark before:animate-typewriter'>
            <h1 className='text-3xl select-none text-white font-mono font-bold uppercase'>{ak.ak.name}</h1>
            </div>
        </section>
        <section  className="  xl:w-[50%]  h-full flex justify-end xl:justify-center items-center">
            <ul className='hidden w-full px-5 text-2xl font-bold xl:flex flex-row justify-evenly items-center uppercase'>
                <li><a className={liTC} href="#intro">Intro</a></li>
                <li><a className={liTC} href="#skills">Skills</a></li>
                <li><a className={liTC} href="#projects">Projects</a></li>
                <li><a className={liTC} href="#aboutme">About</a></li>
                <li><a className={liTC} href="#contacts">Contact</a></li>
            </ul>

        <div className='flex xl:hidden text-white hover:text-primaryDark'>
            {isVisible===true?<IoMdClose size={50} onClick={toggle} />:<GiHamburgerMenu size={40} onClick={toggle}  />}
        </div>
        </section>
        </nav>
        <div className={(isVisible===true?'flex':'hidden')+' xl:hidden w-full h-dvh bg-bgDark z-50'}>

        <ul className='z-100 w-full h-full px-3 text-2xl font-bold flex flex-col justify-evenly items-center uppercase'>
                <li className={hmListItem}>Intro</li>
                <li className={hmListItem}>Skills</li>
                <li className={hmListItem}>Projects</li>
                <li className={hmListItem}>About</li>
                <li className={hmListItem}>Contact</li>
            </ul> 
        </div>
    </header>
    </>
  )
}

export default Header