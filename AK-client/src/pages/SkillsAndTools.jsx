import SkillsCard from "../componenets/SkillsCard.jsx";
import {useContext, useId} from "react";
import AppContext from "../contexts/AppContext.jsx";

const SkillsAndTools = () => {

    const unique = Math.ceil(Math.random().toFixed(4)*10000);
    const uid= useId();
    const akObj = useContext(AppContext);

    return (
        <section id='skills&tools' className=' h-full container mx-auto bg-white dark:bg-primary my-5 py-10 dark:text-white rounded-2xl shadow-xl'>
            <article id='Skills' className='mx-auto px-5'>
                <header>
                    <h1 className='text-center my-5 mx-auto text-3xl font-bold '>Skills</h1>
                </header>
                {akObj.skills.map((item) => (
                    <SkillsCard
                        key={`skills-${uid}-`+item._id.$oid}
                        blockId={item.blockId}
                        headTitle={item.headTitle}
                        skillDetails={item.Obj} // Assuming Obj contains skill details
                    />
                ))}
            </article>
            <article id='Tools' className='mx-auto py-2 px-5'>
                <header>
                    <h1 className='text-center my-5 mx-auto text-3xl font-bold '>Tools</h1>
                </header>

                {akObj.tools.map((item) => (
                    <SkillsCard
                        key={`tools-${uid}`}
                        blockId={item.blockId}
                        headTitle={item.headTitle}
                        skillDetails={item.Obj} // Assuming Obj contains skill details
                    />
                ))}
            </article>
        </section>
    );
};

export default SkillsAndTools;