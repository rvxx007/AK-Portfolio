import errorgif from '../assets/giphy.webp'

const Error = ()=>{

    return(
        <>
        <main className="w-dvw h-dvh flex justify-center items-center bg-white text-black">
            <div style={{border:"1px solid black"}} className="my-auto overflow-hidden ">
                
                <img className='w-dvw h-dvh' src={errorgif} alt="" />
            </div>
           
        </main>
        </>
    )

}

export default Error