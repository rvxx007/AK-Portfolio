import { useState } from "react"
import { logo } from "../../img";


const Card = (prop) => {
  const [hide, setHide] = useState(false);
    const {Obj} = prop

   const miniFun = ()=>{
      // const pp = document.querySelector('#pp');
      // pp.
      if(hide === true){
        setHide(false)
      }else{
        setHide(true)
      }
    }
  return (
    <main className='w-full  lg:w-[422px] border-2 border-gray-300 rounded-2xl mx-auto bg-[#FFF] m-7 shadow-2xl'>
              <header className=' border-b-2 border-gray-300  rounderd-b-2xl'>
                <nav className='flex justify-between p-4'>
                  <div>
                    <h2 id="email" className='text-xl font-bold'>{Obj.email}</h2>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <span className='w-5 h-5 cursor-pointer bg-[#FB4644] rounded-full' onClick={miniFun}></span>
                    <span className='w-5 h-5 cursor-pointer bg-[#FCBE2A] rounded-full'></span>
                    <span className='w-5 h-5 cursor-pointer bg-[#29C841] rounded-full'></span>
                  </div>
                </nav>
              </header>
              <div id='pro-pic' className={hide===true?"w-full h-[422px] mx-auto flex justify-center items-center flex-col":"w-[422px] h-[422px] mx-auto" } >
                
                {hide===true?<>
                <img className="w-[10rem] h-[10rem] mx-auto my-auto rounded-3xl" src={logo} />
                <div  className="w-full mx-auto my-auto flex flex-col justify-evenly items-center">
                <h1 className="text-3xl font-bold">{Obj.name}</h1>
                <h4 className="text-[#474747] text-xl font-semibold">{Obj.ph}</h4>
                <h4 className="text-[#474747] text-xl font-semibold">{Obj.email}</h4>
                </div>

                </> :<img id="pp" className='grayscale mx-auto z-10' src={Obj.img} alt="Akash kawale" />}
              </div>
              <footer  className=' flex border-2 border-[#dbdbdb] rounded-b-2xl'>
                <a id={prop.idAb} href="../../assets/AK-Resume.pdf" download className='w-full hover:bg-black hover:text-white cursor-pointer border-none bg-[#FFF] mx-auto text-center text-lg font-semibold p-3 rounded-b-2xl'>
                  {prop.btnName}
                </a>
              </footer>
            </main>
  )
}

export default Card