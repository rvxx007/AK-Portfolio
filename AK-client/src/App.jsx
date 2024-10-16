import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AppContext from './contexts/AppContext.jsx';
import AppDarkModeContext from "./contexts/AppDarkModeContext.jsx";
import {useEffect, useState} from "react";

import Error from './pages/Error.jsx';
import { toast } from 'react-toastify';


// const akObj={
//   "_id": {
//     "$oid": "6702802eae1a9b5ff8f0506a"
//   },
//   "name": "Akash kawale",
//   "email": "akashkawle0@gmail.com",
//   "ph": 939577131,
//   "img": "/img/ak.png",
//   "logo": "/img/logo.png",
//   "bg": "bg",
//   "aboutTitle": "About Me",
//   "about": "I was born in Nagpur, Maharashtra, and currently live in Hydrabad, Telangana. My journey into frontend/backend/mernstack development began in 2023, and since then, I’ve fallen in love with everything related to the MERN stack (MongoDB, Express.js, React, Node.js).",
//   "initials": "AK",
//   "headTitle": "Hello , I'm a FullStack & MernStack Developer",
//   "headSub": "Im a dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise lies in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I&apos;m passionate about crafting intuitive user interfaces and efficient server-side logic.",
//   "skills": [
//     {
//       "idBlock": "fred",
//       "headTitle": "Frontend",
//       "Obj": [
//         {
//           "img": "/img/html.svg",
//           "title": "HTML",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0506c"
//           }
//         },
//         {
//           "img": "/img/css.svg",
//           "title": "CSS",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0506d"
//           }
//         },
//         {
//           "img": "/img/js.svg",
//           "title": "JavaScript",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0506e"
//           }
//         },
//         {
//           "img": "/img/react.svg",
//           "title": "React",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0506f"
//           }
//         },
//         {
//           "img": "/img/bootstrap.svg",
//           "title": "BootStrap",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05070"
//           }
//         },
//         {
//           "img": "/img/tailwindcss.svg",
//           "title": "TailwindCSS",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05071"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f0506b"
//       }
//     },
//     {
//       "idBlock": "bked",
//       "headTitle": "Backend",
//       "Obj": [
//         {
//           "img": "/img/nodejs.svg",
//           "title": "Node.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05073"
//           }
//         },
//         {
//           "img": "/img/expressjs.svg",
//           "title": "Express.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05074"
//           }
//         },
//         {
//           "img": "/img/mongodb.svg",
//           "title": "MongoDB",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05075"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05072"
//       }
//     }
//   ],
//   "tools": [
//     {
//       "idBlock": "devTl",
//       "headTitle": "Developement Tools",
//       "Obj": [
//         {
//           "img": "/img/androidstudio.svg",
//           "title": "Android Studio",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05077"
//           }
//         },
//         {
//           "img": "/img/vscode.svg",
//           "title": "VsCode",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05078"
//           }
//         },
//         {
//           "img": "/img/intelij.svg",
//           "title": "Intelij Ultimate",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05079"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05076"
//       }
//     },
//     {
//       "idBlock": "disTl",
//       "headTitle": "Design Tools",
//       "Obj": [
//         {
//           "img": "/img/canva.svg",
//           "title": "Canva",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0507b"
//           }
//         },
//         {
//           "img": "/img/blender.svg",
//           "title": "Blender",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0507c"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f0507a"
//       }
//     },
//     {
//       "idBlock": "aiTl",
//       "headTitle": "AI Tools",
//       "Obj": [
//         {
//           "img": "/img/chatgpt.svg",
//           "title": "ChatGPT",
//           "url": "https://chatgpt.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0507e"
//           }
//         },
//         {
//           "img": "/img/gemini.svg",
//           "title": "Gemini",
//           "url": "https://gemini.google.com/app",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0507f"
//           }
//         },
//         {
//           "img": "/img/bing.svg",
//           "title": "MS Bing AI",
//           "url": "https://www.bing.com/images/create",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05080"
//           }
//         },
//         {
//           "img": "/img/msdesigner.svg",
//           "title": "MS Designer",
//           "url": "https://designer.microsoft.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05081"
//           }
//         },
//         {
//           "img": "/img/microsoftcopilot.svg",
//           "title": "MS Copilot",
//           "url": "https://copilot.microsoft.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05082"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f0507d"
//       }
//     },
//     {
//       "idBlock": "diaTl",
//       "headTitle": "Diagramming Tools",
//       "Obj": [
//         {
//           "img": "/img/draw.io.svg",
//           "title": "Draw.io",
//           "url": "https://app.diagrams.net/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05084"
//           }
//         },
//         {
//           "img": "/img/excalidraw.svg",
//           "title": "ExcaliDraw",
//           "url": "https://excalidraw.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05085"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05083"
//       }
//     },
//     {
//       "idBlock": "hdTl",
//       "headTitle": "Hosting & Deployment Tools",
//       "Obj": [
//         {
//           "img": "/img/git.svg",
//           "title": "Git",
//           "url": "#",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05087"
//           }
//         },
//         {
//           "img": "/img/githubdark.svg",
//           "title": "GitHub",
//           "url": "https://github.com/rvxx007",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05088"
//           }
//         },
//         {
//           "img": "/img/netlify.svg",
//           "title": "Netlify",
//           "url": "https://www.netlify.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05089"
//           }
//         },
//         {
//           "img": "/img/render.svg",
//           "title": "Render",
//           "url": "https://render.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0508a"
//           }
//         },
//         {
//           "img": "/img/vercel.svg",
//           "title": "Vercel",
//           "url": "https://vercel.com/",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0508b"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05086"
//       }
//     }
//   ],
//   "serviceObj": [
//     {
//       "idblock": "frontend-dev",
//       "headTitle": "Frontend Developement",
//       "description": "Create Frontend web applications using the HTML, CSS, JS , React, TailwindCSS, BootStrap .",
//       "Obj": [
//         {
//           "img": "/img/html.svg",
//           "title": "HTML",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0508d"
//           }
//         },
//         {
//           "img": "/img/css.svg",
//           "title": "CSS",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0508e"
//           }
//         },
//         {
//           "img": "/img/js.svg",
//           "title": "JavaScript",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0508f"
//           }
//         },
//         {
//           "img": "/img/react.svg",
//           "title": "React",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05090"
//           }
//         },
//         {
//           "img": "/img/tailwindcss.svg",
//           "title": "TailwindCSS",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05091"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f0508c"
//       }
//     },
//     {
//       "idblock": "backend-dev",
//       "headTitle": "Backend Developement",
//       "description": "Create Backend applications using the Node.js, Express.js(REST API), MongoDB.",
//       "Obj": [
//         {
//           "img": "/img/nodejs.svg",
//           "title": "Node.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05093"
//           }
//         },
//         {
//           "img": "/img/expressjs.svg",
//           "title": "Express.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05094"
//           }
//         },
//         {
//           "img": "/img/mongodb.svg",
//           "title": "MongoDB",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05095"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05092"
//       }
//     },
//     {
//       "idblock": "mernstack-dev",
//       "headTitle": "MernStack Developement",
//       "description": "Create web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//       "Obj": [
//         {
//           "img": "/img/mongodb.svg",
//           "title": "MongoDB",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05097"
//           }
//         },
//         {
//           "img": "/img/expressjs.svg",
//           "title": "Express.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05098"
//           }
//         },
//         {
//           "img": "/img/react.svg",
//           "title": "React",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f05099"
//           }
//         },
//         {
//           "img": "/img/nodejs.svg",
//           "title": "Node.js",
//           "_id": {
//             "$oid": "6702802eae1a9b5ff8f0509a"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6702802eae1a9b5ff8f05096"
//       }
//     }
//   ],
//   "createdAt": {
//     "$date": "2024-10-06T12:18:54.082Z"
//   },
//   "updatedAt": {
//     "$date": "2024-10-06T12:18:54.082Z"
//   },
//   "__v": 0
// }
function App() {


  const [isDarkMode, setIsDarkMode] = useState(true)
  const [akObj, setAkObj] = useState({})


  useEffect(()=>{
    fetch("https://ak-portfolio-server.onrender.com/api/v1/ak/get/ak")
    .then((response) => response.json())
    .then((result) => {
        if(result.success === true){
            setAkObj(result.data[0])
            console.log(result.data[0]);
            
            return toast.success("Welcome")
        }else{
            return toast.error(result.msg)
        }
    }).catch((error)=>{
    return toast.error(error);
})
  },[])

  
if(!akObj || akObj=== null || akObj.data ===null)
{
  toast.success(akObj.msg)
}
  
  return (
    <>
      <BrowserRouter basename="/">
        <AppContext.Provider value={akObj}>
          <Routes>
            <Route path="/" element={
              <>
                <AppDarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
                  <Home />
                </AppDarkModeContext.Provider>
              </>
            } />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
  </>
);
}

export default App;