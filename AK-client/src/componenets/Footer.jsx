import {useContext} from "react";
import AppContext from "../contexts/AppContext.jsx";


const Footer = () => {

    const akObj = useContext(AppContext)
    return (
        <>
            <footer className="w-full gap-5 bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center rounded-none lg:rounded-2xl shadow-2xl p-5">
                <div className="mx-auto dark:text-white flex flex-col justify-center items-center gap-3">
                    <img className="w-[30px] h-[30px] rounded-full" src={`${'https://ak-portfolio-server.onrender.com'}${(!akObj.logo?"":akObj.logo)}`} alt="Logo" />
                    <span className="text-[12px] dark:text-white font-semibold text-gray-800">Copyright &copy; {new Date().getFullYear()} , Created by AK</span>
                </div>

            </footer>
        </>
    )
}

export default Footer