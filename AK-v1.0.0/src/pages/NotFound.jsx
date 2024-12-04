import notFound from '../assets/404.gif';

const NotFound = () => {
  return (
    <>
        <main className=" w-dvw h-dvh flex justify-center items-center text-center">
          <div className=' w-full flex justify-center items-center px-10 py-3 bg-secondaryDark shadow-inner'>
            <div className='flex justify-center items-end '>
                <img src={notFound} alt="404" />
                <h1 className='font-mono text-white text-2xl font-bold mb-8'>404 Page Not Found</h1>
            </div>
          </div>
        </main>
    </>
  )
}

export default NotFound