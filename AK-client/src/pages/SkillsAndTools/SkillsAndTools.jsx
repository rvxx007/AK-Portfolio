import SkillsCard from '../../component/SkillsCard/SkillsCard.jsx'

const SkillsAndTools = (prop) => {

  const {akObj} = prop;
  
  return (
    <>
    <section id='skills&tools'  className='mx-auto my-20 '>
          <main id='Skills' className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Skills</h1>
            </header>
            {akObj.skills.map((item)=><SkillsCard key={"skills-"+item.blockId} blockId={item.blockId} headTitle={item.headTitle} Obj={item.Obj}/>)}
          </main>
          <main id='Tools' className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Tools</h1>
            </header>
            {akObj.tools.map((item)=><SkillsCard key={"tools-"+item.blockId} blockId={item.blockId} headTitle={item.headTitle} Obj={item.Obj}/>)}
          </main>
        </section>
    </>
  )
}

export default SkillsAndTools