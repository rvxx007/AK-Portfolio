import SM from "../SM/SM.jsx"

const ToolsCard = (prop) => {
  return (
    <section className=' border-2 border-gray-300 shadow-xl rounded-2xl my-5 lg:p-5'>
              <div className='lg:flex flex-col lg:flex-row mx-auto justify-center items-center '>
                <div  className='w-full  flex-col lg:flex-row flex lg:justify-start items-center '>
                  <h1 className='border-2 border-gray-300 my-5 mx-auto text-[2rem] font-bold text-black'>{prop.headTitle}</h1>
                </div>
                <div  className='w-full gap-3 lg:gap-5 flex-wrap lg:flex-nowrap flex justify-evenly items-center my-5'>
                  {
                    prop.Obj.map(items => (<div key={items} className=" p-2 shadow-xl border-2 border-gray-300 rounded-2xl"><SM key={items} imgObj={items.img} title={items.title}/></div>)) 
                  }
                </div>
              </div>
            </section>
  )
}

export default ToolsCard