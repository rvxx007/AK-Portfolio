import SM from "./SM.jsx";

const ToolsCard = ({ blockId, headTitle,toolDetails }) => {
    return (
        <section className="border-2 border-gray-300 shadow-xl rounded-2xl p-5 lg:p-10">
            <div className='lg:flex flex-col lg:flex-row mx-auto justify-center items-center '>
                <div className='w-full  flex-col lg:flex-row flex justify-center items-center lg:justify-evenly'>
                    <h1 className='w-full my-5 mx-auto text-[1.5rem] text-center lg:text-left font-bold '>{headTitle}</h1>
                </div>
                <div className='w-full gap-3 lg:gap-5 flex-wrap lg:flex-nowrap flex justify-evenly items-center my-5'>
                    <div
                        className="w-full flex justify-evenly items-center gap-3 flex-wrap lg:flex-nowrap py-3 ">
                        {
                            toolDetails.map((items) => (<>
                                <SM key={items._id.$oid} imgs={items.img} title={items.title}/>
                            </>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsCard;