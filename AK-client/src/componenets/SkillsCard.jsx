import SM from "./SM.jsx";
import {useId} from "react";

const SkillsCard = (prop) => {
    const {blockId, headTitle,skillDetails}= prop

    const uniqueKey = useId()
    return (
        <>
                    <section id={blockId} className=' border-2 dark:bg-secondary border-gray-150 dark:border-gray-900 shadow-xl rounded-2xl my-5 lg:p-5'>
                        <div className='lg:flex flex-col lg:flex-row mx-auto justify-center items-center '>
                            <div className='w-full  flex-col lg:flex-row flex justify-center items-center lg:justify-evenly'>
                                <h1 className='w-full my-5 mx-auto text-[1.5rem] text-center lg:text-left font-bold '>{headTitle}</h1>
                            </div>
                            <div className='w-full gap-3 lg:gap-5 flex-wrap lg:flex-nowrap flex justify-evenly items-center my-5'>
                                <div
                                     className="w-full flex justify-evenly items-center gap-3 flex-wrap lg:flex-nowrap py-3 ">
                                {
                                    skillDetails.map((items)=>(<>
                                            <SM key={items._id.$oid} imgs={items.img} title={items.title}/>
                                    </>))
                                }
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    )
}

export default SkillsCard