
import { ham } from "../../img"

const NavBar = (prop) => {

  const {visi, akObj } = prop

    const [isVisible, setIsVisible] = visi;

     const handleClose = ()=>{

        if(isVisible===true){
          setIsVisible(false);
        }else{
          setIsVisible(true);
        }
   }

   console.log(akObj.data[0].logo);
   
  return (
<header id='navBar' className='h-20 bg-inherit shadow-md border border-b-2 border-gray-300  text-xl text-black font-bold container mx-auto my-auto flex justify-center items-center rounded-t-lg  '>
          <nav className='h-20 w-full my-auto flex justify-between items-center'>
            <section className='w-[50%] pl-10 my-auto'>
              <img src={`http://localhost:5555${akObj.data[0].logo}`} className="w-[4rem] h-[4rem] my-auto object-cover bg-black rounded-full" alt="logo" />
            </section>
            <section className='w-[50%] '>
              <ul className='hidden lg:flex mx-auto justify-evenly text-black'>
                <li id='nav-home'><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#home">Home</a></li>
                <li id='nav-services' ><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#services">Services</a></li>
                <li id='nav-skills' ><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#skills&tools">Skills</a></li>
                <li id='nav-about' ><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#about">About</a></li>
                <li id='nav-contact' ><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#contact">Contact</a></li>
              </ul>
              <div  className='lg:hidden flex flex-row justify-end items-center my-auto p-5'>
              <img onClick={handleClose} id='ham-menu' className='cursor-pointer' src={ham} alt="" />
              </div>
            </section>
          </nav>
        </header>
  )
}

export default NavBar