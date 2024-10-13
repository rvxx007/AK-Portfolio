import PropTypes from 'prop-types';
import SM from "./SM.jsx";
import {useId} from "react";

const ServicesCard = ({ headtitle, description, Obj }) => {

    const uniqueBlock = useId()

    return (
        <section className="w-full border-2 dark:bg-secondary border-gray-150 dark:border-gray-900 shadow-xl rounded-2xl my-5 p-5">
            <div className="lg:flex lg:flex-row mx-auto justify-center items-center">
                <div className="lg:w-1/2 flex flex-col lg:flex-row justify-center items-center">
                    <h1 className="my-5 mx-auto text-2xl font-bold text-black dark:text-white">{headtitle}</h1>
                    <p className=" text-gray-500 text-pretty mx-5 dark:text-subtitletxtcol text-pretty font-semibold">{description}</p>
                </div>
                <div className="w-full flex  flex-wrap justify-evenly items-center gap-4 my-5">
                    <div key={uniqueBlock}
                         className="w-full flex justify-evenly items-center flex-wrap   gap-3 ">
                        {Obj.map((item) => (

                            <SM key={`srv-${item._id.$oid}`} imgs={item.img} title={item.title}/>

                            ))}
                    </div>
                    </div>
                </div>
        </section>
    );
};

ServicesCard.propTypes = {
    headtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Obj: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ServicesCard;