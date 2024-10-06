import SM from "../SM/SM.jsx"
const ServicesCard = (prop) => {
   
  return (
    <section className=' border-2 border-gray-300 shadow-xl rounded-2xl my-5 p-5'>
              <div className='lg:flex flex-col lg:flex-row mx-auto justify-center items-center '>
                <div className='w-full lg:w-[50%] flex-col lg:flex-row flex justify-center items-center lg:justify-evenly'>
                  <h1 className='my-5 mx-auto text-[2rem] font-bold text-black'>{prop.headtitle}</h1>
                  <p className='text-pretty font-semibold'>{prop.description}</p>
                </div>
                <div  className='w-full flex-wrap lg:w-[50%] flex justify-evenly items-center my-5'>
                  {
                    prop.Obj.map(items => (<SM key={"srv-"+items.title} imgObj={items.img} title={items.title}/>)) 
                  }
                </div>
              </div>
            </section>
  )
}

export default ServicesCard