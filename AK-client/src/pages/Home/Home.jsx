import Card from "../../component/Card/Card"


const Home = (prop) => {
  return (
    <>
    <section id='home' className='h-full my-5 flex flex-col lg:flex-row  '>
          <div  className='w-full lg:w-[50%] my-auto flex flex-col gap-5'>
            <h1 className=' my-3 text-[3rem] font-bold mx-auto text-center' >{prop.akObj.headtitle}</h1>
            <p id='summery' className='text-[#444444] my-3 lg:ms-5 text-md font-semibold text-justify  px-3 ' >{prop.akObj.headsub}</p>
          <div>

          </div>
          </div>
          <div id='profile' className='w-full lg:w-[50%]'>
            <Card idAb="cv-download" btnName="CV Download" Obj={prop.akObj}/>
          </div>
        </section>
    </>
  )
}

export default Home