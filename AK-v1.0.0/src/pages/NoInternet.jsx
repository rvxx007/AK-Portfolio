import noInternet from '../assets/noInternet.svg' 

const NoInternet = () => {
  return (
    <div className=' min-h-dvh min-w-dwh flex justify-center items-center text-primaryDark  bg-secondaryDark'>
        <div  className='h-[500px] p-5 w-full flex justify-center items-center flex-col gap-7 bg-bgDark shadow-2xl '>
            <img className=' w-[100px] h-[100px]' src={noInternet} alt="no Internet" />
            <h1 className=' font-bold text-center text-4xl'>No Internet Connection</h1>
            <span className='text-sm text-center  font-semibold'>Please Check Your Internet Connection or Contact To Your Service Provider</span>
        </div>
    </div>
  )
}

export default NoInternet