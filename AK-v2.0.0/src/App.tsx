import { useState } from "react"

import AppContext from "./Contexts/AppContext";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import SplashScreen from "./pages/SplashScreen";

function App() {
 const [splashScreen, setSplashScreen] = useState(false);

  setTimeout(()=>{
    setSplashScreen(true);
  },5000)

  const ak : object = {};
  

  return splashScreen === false ? (
    <>
      <BrowserRouter>
        <AppContext.Provider value={ak} >
          <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  ):
  (<>
    <main className=" w-dvw h-dvh overflow-x-hidden ">
      <SplashScreen />
    </main>
  </>)
}

export default App
