import logo from '../../assets/logo.png';

const SplashScreen = () => {
  return (
    <>
    <main className=" w-dvw h-dvh overflow-hidden text-white bg-black flex justify-between items-center text-center">
            <div className=' w-full flex justify-center items-center flex-col'>
            
            <div className=' w-full flex justify-center items-center'>
            <div className='w-full animate-pulse mb-2 gap-6 flex justify-between items-center flex-col'>
            <span className=' w-full bg-gradient-to-l from-white  to-primaryDark p-2'></span>
            <span className=' w-full bg-gradient-to-l from-white  to-primaryDark p-2'></span>
            </div>
            <img src={logo} alt="Akash Kawle Logo" className=' animate-pulse rounded-full shadow-2xl' />
            <div className='w-full animate-pulse mb-2 gap-6 flex justify-between items-center flex-col'>
            <span className=' w-full bg-gradient-to-r from-white to-primaryDark p-2'></span>
            <span className=' w-full  bg-gradient-to-r from-white to-primaryDark p-2'></span>
            </div>
            </div>
            
            </div>
    </main>
    </>
  )
}

export default SplashScreen