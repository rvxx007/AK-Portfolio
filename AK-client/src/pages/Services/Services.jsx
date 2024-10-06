import ServicesCard from "../../component/ServicesCard/ServicesCard.jsx"
const Services = (prop) => {
  const {akObj} =prop
  
  return (

    <>
    <section id='services' className='mx-auto my-20'>
          <main className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Services</h1>
            </header>

            {Object.entries(akObj.serviceObj).map((item)=>
            <ServicesCard
              key={"services-"+item[1].idblock}
              idblock={item[1].idblock}
              headtitle={item[1].headtitle}
              description={item[1].description}
               Obj={item[1].Obj}
                />)}
            
          </main>
        </section>
    </>
  )
}

export default Services