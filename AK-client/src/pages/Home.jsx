import Header from "../componenets/Header.jsx";
import Intro from "./Intro.jsx";
import Services from "./Services.jsx";
import SkillsAndTools from "./SkillsAndTools.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import {useContext} from "react";
import AppDarkModeContext from "../contexts/AppDarkModeContext.jsx";
import Footer from "../componenets/Footer.jsx";

import NoInternet from "../componenets/NoInternet.jsx";


const Home= ()=>{
    // eslint-disable-next-line no-unused-vars
    const [isDarkMode, setIsDarkMode] = useContext(AppDarkModeContext);

    if(navigator.onLine === true){
        
                return (
                    <>
                            <main
                                  className={`h-full container mx-auto ${(!isDarkMode?"":"dark")} bg-white dark:bg-black bg-white dark:bg-black `}>
                                    <Header/>
                                    <main className="lg:px-5 ">
                                            <Intro/>
                                            <Services/>
                                            <SkillsAndTools/>
                                            <About/>
                                            <Contact/>
                                        <Footer/>
                                    </main>

                            </main>
                    </>
                )
          }else{
        return(
            <>
                   <NoInternet/>
            </>
        )
}
}

export default Home