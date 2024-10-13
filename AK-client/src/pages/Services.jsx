import ServicesCard from "../componenets/ServicesCard.jsx";
import {useContext, useId} from "react";
import AppContext from "../contexts/AppContext.jsx"; // Use PascalCase for directories

const Services = () => { // Use destructuring for props

    const akObj = useContext(AppContext)
    const uniqueId = useId();
    // Consider destructuring akObj.serviceObj for cleaner access
    const { serviceObj } = akObj;

    return (
        <>
            <section id="services" className="h-full container my-5 flex flex-col lg:flex-row border-2 border-gray-150 dark:border-none  bg-white dark:bg-primary rounded-2xl shadow-xl">
                <main className="mx-auto px-5">
                    <header>
                        <h1 className="dark:text-white text-center my-5 mx-auto text-3xl font-bold text-gray-800">
                            Services
                        </h1>
                    </header>

                    {serviceObj.map((item) => (
                        <ServicesCard
                            key={`services-${item._id.$oid}`} // Use template literals for string concatenation
                            idblock={item.idblock}
                            headtitle={item.headTitle}
                            description={item.description}
                            Obj={item.Obj}
                        />
                    ))}
                </main>
            </section>
        </>
    );
};

export default Services;