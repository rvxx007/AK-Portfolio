import Card from "../../component/Card/Card.jsx";

const About = (prop) => {
  return (
    <>
      <section id="about" className="mx-auto my-20 ">
        <main id="About" className="mx-auto px-5">
          <header>
            <h1 className="text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]">
              About
            </h1>
          </header>
          <section className='h-full my-5 flex flex-col lg:flex-row  '>
            <div id="profile" className="w-full lg:w-[50%]">
              <Card idAb="#Contact" btnName="HIRE ME" Obj={prop.akObj} />
            </div>
            <div className="w-full lg:w-[50%] my-auto flex flex-col gap-5">
              <h1 className=" my-3 text-[3rem] font-bold mx-auto text-center">
                {prop.akObj.aboutTitle}
              </h1>
              <p
                id="summery"
                className="text-[#444444] my-3 text-xl lg:ms-5 text-md font-bold text-justify  px-3 "
              >
                {prop.akObj.about}
              </p>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default About;
