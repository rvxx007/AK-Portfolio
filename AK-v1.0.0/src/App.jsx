import { useEffect, useState } from "react"
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import NotFound from "./pages/NotFound";
import axios from 'axios';
import NoInternet from "./pages/NoInternet";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [ak, setAk] = useState({});
 
  async function fetchData(){
    if(isOnline === true){
    await axios.get("https://ak-portfolio-server.onrender.com/api/v1/ak/get",{
        maxBodyLength:Infinity,
        redirect:"follow",
        headers:{"Content-Type":"application/json"}
      }).then(resp=>setAk(resp.data.data))
      .catch(err=>console.error(err.message));
    }
  }

  const handleCheckInternet = ()=>{
    setIsOnline(navigator.onLine);
  }

  useEffect(()=>{
    window.addEventListener("online",handleCheckInternet)
    window.addEventListener("offline",handleCheckInternet)
    fetchData();
  },[isOnline]);

  if(isOnline){
    setTimeout(()=>{
      setSplashScreen(false);
    },5000);
  }


  return isOnline===true ? (splashScreen === false? (
    <BrowserRouter >
      <AppContext.Provider value={ak}>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  ): (
    <>
      <main className=" w-dvw h-dvh overflow-x-hidden ">
         <SplashScreen/>
      </main>
    </>
  )):<NoInternet/>
}

export default App
