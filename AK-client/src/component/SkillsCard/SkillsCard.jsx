import SM from "../SM/SM.jsx"

const SkillsCard = (prop) => {
  return (
    <section id={prop.blockId} className=' border-2 border-gray-300 shadow-xl rounded-2xl my-5 lg:p-5'>
              <div className='lg:flex flex-col lg:flex-row mx-auto justify-center items-center '>
                <div className='w-full  flex-col lg:flex-row flex justify-center items-center lg:justify-evenly'>
                  <h1 className='w-full my-5 mx-auto text-[2rem] text-center lg:text-left font-bold text-black'>{prop.headTitle}</h1>
                </div>
                <div className='w-full gap-3 lg:gap-5 flex-wrap lg:flex-nowrap flex justify-evenly items-center my-5'>
                  {
                    prop.Obj.map(items => (<div key={"id-"+items.id} className=" p-2 shadow-xl border-2 border-gray-300 rounded-2xl"><SM key={"sk-tl-"+items.title} imgObj={items.img} title={items.title}/></div>)) 
                  }
                </div>
              </div>
            </section>
  )
}

export default SkillsCard