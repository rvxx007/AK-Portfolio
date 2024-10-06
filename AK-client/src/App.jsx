// import {ak ,reactImg ,nodeImg ,expressImg ,mongoImg,
//   twCSSImg ,htmlImg ,cssImg ,jsImg ,bootstrapImg ,VsCodeImg ,
//   AndStudImg ,gitImg ,githubImg ,blenderImg ,intelijImg ,renderImg ,
//   vercelImg ,netlifyImg ,chatgptImg ,msDesignerImg ,msCopilot ,msBingAIImg ,
//   geminiImg ,canvaImg ,drawio ,excalidraw, bg, logo} from './img/index.js'
  
  import { driver } from 'driver.js'
  import "driver.js/dist/driver.css";
  import NavBar from './component/NavBar/NavBar.jsx';
  // import Home from './pages/Home/Home.jsx';
  // import Services from './pages/Services/Services.jsx';
  // import About from './pages/About/About.jsx';
  // import Contact from './pages/Contact/Contact.jsx';
  // import Footer from './component/Footer/Footer.jsx';
  import close from './img/close.svg';

  import { useEffect, useState } from 'react';
  import axios from 'axios'
  import './output.css'

function App() {

  const [akObj, setAkObj] = useState({})
  const url = 'http://localhost:5555/api/v1/ak/get/ak'
  const datafun = async ()=>{
    await axios(url).then((response)=>{
        const resData = response.data;
        console.log(resData);
        
        setAkObj(resData);
    }).catch((err)=>{
      console.error(err);
    })
  }

useEffect(()=>{
  addEventListener('load',()=>{
    window.scrollTo(0, 0);
    datafun();
  });
},[])

  
  

  console.log(akObj);
  

  // const akObj = {
  //   name: "Akash kawale",
  //   email: "akashkawle0@gmail.com",
  //   ph: 939577131,
  //   img: ak,
  //   bg:bg,
  //   aboutTitle:"About Me",
  //   about:"I was born in Nagpur, Maharashtra, and currently live in Hydrabad, Telangana. My journey into frontend/backend/mernstack development began in 2023, and since then, I’ve fallen in love with everything related to the MERN stack (MongoDB, Express.js, React, Node.js).",
  //   initials: "AK",
  //   headtitle:"Hello , I'm a FullStack & MernStack Developer",
  //   headsub: "Im a dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise lies in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I&apos;m passionate about crafting intuitive user interfaces and efficient server-side logic.",
  //   skills:[
  //     {
  //     blockId:"fred",
  //     headTitle:"Frontend",
  //     Obj:[
  //       {
  //         id: 0,
  //         img: htmlImg,
  //         title: "HTML"
  //       },
  //       {
  //         id: 1,
  //         img: cssImg,
  //         title: "CSS"
  //       },
  //       {
  //         id: 2,
  //         img: jsImg,
  //         title: "JavaScript"
  //       },
  //       {
  //         id: 3,
  //         img: reactImg,
  //         title: "React"
  //       },
  //       {
  //         id: 4,
  //         img: bootstrapImg,
  //         title: "BootStrap"
  //       },
  //       {
  //         id: 5,
  //         img: twCSSImg,
  //         title: "TailwindCSS"
  //       }
  //     ]
  //   },
  //     {
  //       blockId:"bked",
  //       headTitle:"Backend",
  //       Obj:[
  //         {
  //           id: 0,
  //           img: nodeImg,
  //           title: "Node.js"
  //         },
  //         {
  //           id: 1,
  //           img: expressImg,
  //           title: "Express.js"
  //         },
  //         {
  //           id: 2,
  //           img: mongoImg,
  //           title: "MongoDB"
  //         }
  //       ]
  //     }
  //   ],
      
  //   tools:[
  //   {
  //     blockId:"devTl",
  //     headTitle:"Developement Tools",
  //     Obj:[
  //       {
  //         id: 0,
  //         img: AndStudImg,
  //         title: "Android Studio"
  //       },
  //       {
  //         id: 1,
  //         img: VsCodeImg,
  //         title: "VsCode"
  //       },
  //       {
  //         id: 2,
  //         img: intelijImg,
  //         title: "Intelij Ultimate"
  //       },
        
  //     ]},
  //     { 
  //       blockId:"disTl",
  //       headTitle:"Design Tools",
  //       Obj:[{
  //         id: 0,
  //         img: canvaImg,
  //         title: "Canva"
  //       },
  //       {
  //         id: 1,
  //         img: blenderImg,
  //         title: "Blender"
  //       },
  //     ]},
  //     {
  //       blockId:"aiTl",
  //       headTitle:"AI Tools",
  //       Obj:[{
  //         id: 0,
  //         img: chatgptImg,
  //         title: "ChatGPT",
  //         url:"https://chatgpt.com/"
  //       },
  //       {
  //         id: 1,
  //         img: geminiImg,
  //         title: "Gemini",
  //         url:"https://gemini.google.com/app"
  //       },
  //       {
  //         id: 2,
  //         img: msBingAIImg,
  //         title: "MS Bing AI",
  //         url: "https://www.bing.com/images/create"
  //       },
  //       {
  //         id: 3,
  //         img: msDesignerImg,
  //         title: "MS Designer",
  //         url: "https://designer.microsoft.com/"
  //       },
  //       {
  //         id: 4,
  //         img: msCopilot,
  //         title: "MS Copilot",
  //         url: "https://copilot.microsoft.com/"
  //       },
        
  //     ]},
  //     {
  //       blockId:"diaTl",
  //       headTitle:"Diagramming Tools",
  //       Obj:[{
  //         id: 0,
  //         img: drawio,
  //         title: "Draw.io",
  //         url:"https://app.diagrams.net/"
  //       },
  //       {
  //         id: 1,
  //         img: excalidraw,
  //         title: "ExcaliDraw",
  //         url:"https://excalidraw.com/"
  //       }
  //     ]},
  //     {
  //       blockId:"hdTl",
  //       headTitle:"Hosting & Deployment Tools",
  //       Obj:[{
  //         id: 0,
  //         img: gitImg,
  //         title: "Git",
  //         url:"#"
  //       },
  //       {
  //         id: 1,
  //         img: githubImg,
  //         title: "GitHub",
  //         url: "https://github.com/rvxx007"
  //       },
  //       {
  //         id: 2,
  //         img: netlifyImg,
  //         title: "Netlify",
  //         url:"https://www.netlify.com/"
  //       },
  //       {
  //         id: 3,
  //         img: renderImg,
  //         title: "Render",
  //         url: "https://render.com/"
  //       },
  //       {
  //         id: 4,
  //         img: vercelImg,
  //         title: "Vercel",
  //         url:"https://vercel.com/"
  //       },
  //     ]}],
  //     serviceObj: [
  //         {
  //         idblock:"fe-dev",
  //         headtitle:"Frontend Developement",
  //         description:"Create Frontend web applications using the HTML, CSS, JS , React, TailwindCSS, BootStrap .",
  //         Obj:[
  //           {
  //             id: 0,
  //             img: htmlImg,
  //             title: "HTML"
  //           },
  //           {
  //             id: 1,
  //             img: cssImg,
  //             title: "CSS"
  //           },
  //           {
  //             id: 2,
  //             img: jsImg,
  //             title: "JavaScript"
  //           },  
  //           {
  //             id: 3,
  //             img: reactImg,
  //             title: "React"
  //           },
  //           {
  //             id: 4,
  //             img: twCSSImg,
  //             title: "TailwindCSS"
  //           }
  //         ]
  //       },
  //       {
  //         idblock:"de-dev",
  //         headtitle:"Backend Developement",
  //         description:"Create Backend applications using the Node.js, Express.js(REST API), MongoDB.",
  //         Obj:[{
  //           id: 0,
  //           img: nodeImg,
  //           title: "Node.js"
  //         },
  //         {
  //           id: 1,
  //           img: expressImg,
  //           title: "Express.js"
  //         },
  //         {
  //           id: 2,
  //           img: mongoImg,
  //           title: "MongoDB"
  //         }]
  //       },
  //       {
  //         idblock:"ms-dev",
  //         headtitle:"MernStack Developement",
  //         description:"Create web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
  //         Obj:[{
  //           id: 0,
  //           img: mongoImg,
  //           title: "MongoDB"
  //         },
  //         {
  //           id: 1,
  //           img: expressImg,
  //           title: "Express.js"
  //         },
  //         {
  //           id: 2,
  //           img: reactImg,
  //           title: "React"
  //         },
  //         {
  //           id: 3,
  //           img: nodeImg,
  //           title: "Node.js"
  //         }]
        
  //       }
  //     ]
  // }

const dwidth = window.innerWidth;

const driverObj = driver(dwidth<800 ? {
  showProgress: true,
  showButtons: ['next', 'previous'],
  steps: [
    { element: '#entry', 
      popover: { 
        title:"Welcome To My Portfolio",
        description:"This Not Just a Normal Portfolio , This is the Complete MernStack Application Which Has Frontend + Backend With Admin Panel to change Content of the website without Editing or Writing Code Again and Again , if want to and diffrent animation or blocks that time⌚ i need to edit and write some code but🍑 its steel dynamic MernStack Application ✨✨.", side: 'over', align:'center' 
      }
    },
    { element: '#navBar', 
      popover: { 
        title:"Navigation Bar",
        description:"Using Navbar you can go through all section", side: 'bottom', align:'center' 
      }
    },
    { element: '#ham-menu', popover: { title: 'Hamburger Menu', description: 'OnClick This Hamburger Menu, You Can See Tabs Option', side: "bottom", align: 'start' }},
    { element: '#summery', popover: { title: 'Summery', description: '😎✨', side: "bottom", align: 'center' }},
    { element: '#profile', popover: { title: 'Profile Card', description: 'In Profile Card you can see my Profile Picture and my Email Address , Download CV.', side: "left", align: 'start' }},
    { element: '#email', popover: { title: 'Email Address', description: 'This is my Email Address You Can Connect with me', side: "left", align: 'start' }},
    { element: '#pro-pic', popover: { title: 'This is Me', description: 'Hiii , My name is Akash , Good to Have You Please Check My Portfolio.', side: "left", align: 'start' }},
    { element: '#cv-download', popover: { title: 'Click on this Button , I show You magic', description: 'Come on Click it , Hurry up', side: "left", align: 'start' }},
    { element: '#fe-dev', popover: { title: 'Frontend Developement Service', description: 'I Create Frontend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#de-dev', popover: { title: 'Backend Developement Service', description: 'I Create Backend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#ms-dev', popover: { title: 'MernStack Developement Service', description: 'I Create MernStack Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#fred', popover: { title: 'Frontend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#bked', popover: { title: 'Backend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#devTl', popover: { title: 'Developement Tools', description: 'This Tools I Used to Develope Applications.', side: "top", align: 'start' }},
    { element: '#disTl', popover: { title: 'Designing Tools', description: 'This Tools I Used to create Design Template/3D Models/2D Animation for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#diaTl', popover: { title: 'Diagramming Tools', description: 'This Tools I Used to Draw Flowchart/ER Diagrams/API flow/etc. for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#aiTl', popover: { title: 'AI Tools', description: 'This Tools I Used to Documentation/content/Information Gathering/Image,Logo,Background,etc. Generation For the Applications Developement.', side: "top", align: 'start' }},
    { element: '#hdTl', popover: { title: 'Hosting & Deployment Tools', description: 'This Tools I Used to do the Applications Deployment on Webhosting/VPS .', side: "top", align: 'start' }},
  
  ]
}:{
  showProgress: true,
  showButtons: ['next', 'previous'],
  steps: [
    { element: '#entry', 
      popover: { 
        title:"Welcome To My Portfolio",
        description:"This Not Just a Normal Portfolio , This is the Complete MernStack Application Which Has Frontend + Backend With Admin Panel to change Content of the website without Editing or Writing Code Again and Again , if want to and diffrent animation or blocks that time⌚ i need to edit and write some code but🍑 its steel dynamic MernStack Application ✨✨.", side: 'over', align:'center' 
      }
    },
    { element: '#navBar', popover: 
      { title:"Navigation Bar",
        description:"Using Navbar you can go through all section", side: "left", align: 'start' 
      }
    },
    { element: '#nav-home', popover: { title: 'Home Section Tab', description: 'OnClick this tab you can go to the Home', side: "bottom", align: 'start' }},
    { element: '#nav-services', popover: { title: 'Services Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-skills', popover: { title: 'Skills Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-about', popover: { title: 'About Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-contact', popover: { title: 'Contact Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#home', popover: { title: 'Home Section', description: 'This Is a Home Section Here You Can See Summy and Profile , Download CV.', side: "over", align: 'start' }},
    { element: '#profile', popover: { title: 'Profile Card', description: 'In Profile Card you can see my Profile Picture and my Email Address , Download CV.', side: "left", align: 'start' }},
    { element: '#email', popover: { title: 'Email Address', description: 'This is my Email Address You Can Connect with me', side: "left", align: 'start' }},
    { element: '#pro-pic', popover: { title: 'This is Me', description: 'Hiii , My name is Akash , Good to Have You Please Check My Portfolio.', side: "left", align: 'start' }},
    { element: '#cv-download', popover: { title: 'Click on this Button , I show You magic', description: 'Come on Click it , Hurry up', side: "left", align: 'start' }},
    { element: '#fe-dev', popover: { title: 'Frontend Developement Service', description: 'I Create Frontend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#de-dev', popover: { title: 'Backend Developement Service', description: 'I Create Backend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#ms-dev', popover: { title: 'MernStack Developement Service', description: 'I Create MernStack Application Using this Languages/Skills.', side: "over", align: 'start' }},
    // { element: '#services', popover: { title: 'Services Section', description: 'A Services Which is Provide By Me', side: "over", align: 'start' }},
    // { element: '#Skills', popover: { title: 'Skills Section', description: 'This Skills I have.', side: "over", align: 'start' }},
    { element: '#fred', popover: { title: 'Frontend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#bked', popover: { title: 'Backend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#devTl', popover: { title: 'Developement Tools', description: 'This Tools I Used to Develope Applications.', side: "top", align: 'start' }},
    { element: '#disTl', popover: { title: 'Designing Tools', description: 'This Tools I Used to create Design Template/3D Models/2D Animation for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#diaTl', popover: { title: 'Diagramming Tools', description: 'This Tools I Used to Draw Flowchart/ER Diagrams/API flow/etc. for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#aiTl', popover: { title: 'AI Tools', description: 'This Tools I Used to Documentation/content/Information Gathering/Image,Logo,Background,etc. Generation For the Applications Developement.', side: "top", align: 'start' }},
    { element: '#hdTl', popover: { title: 'Hosting & Deployment Tools', description: 'This Tools I Used to do the Applications Deployment on Webhosting/VPS .', side: "top", align: 'start' }},
  
  ]
});

driverObj.drive();

const [isVisible, setIsVisible] = useState(false);

const handleClose = ()=>{
 if(isVisible===true){
     setIsVisible(false);
 }else{
     setIsVisible(true);
 }
} 

  return (
    <>

<div id='sideMenuDiv' className={`${(isVisible?"flex":"hidden")}`+" flex-col sideMenu z-20  w-full bg-white shadow-2xl absolute rounded-2xl "}>
        <div  className='flex justify-end items-center'>
                <img onClick={handleClose}  className='p-3 shadow-2xl rounded-2xl cursor-pointer' src={close} alt="Close" />
        </div>
        <div  
        className="side-menu w-full h-full mx-auto flex justify-center items-center">
            <ul  className="w-full flex flex-col text-black text-center my-20 text-5xl z-20 font-bold gap-20"> 
                <li><a className=' cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#home">Home</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#services">Services</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#skills&tools">Skills</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#projects">Projects</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#about">About</a></li>
                <li><a className='cursor-pointer hover:bg-slate-800 hover:text-white px-5 py-3 rounded-full' href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
        {/* <SideMenu /> */}
      <main id='entry' className='bg-[#FFF] container mx-auto my-0 xl:my-5  border-2 border-gray-300  scroll-smooth shadow-2xl border-none rounded-2xl  p-3 lg:p-0'>
          <NavBar  visi={[isVisible, setIsVisible]} akObj={akObj}/>
          {/* <Home akObj={akObj} />
          <Services akObj={akObj}/> */}
          {/* <SkillsCard akObj={akObj}/> */}
          {/* <About akObj={akObj} />
          <Contact  />
          <Footer /> */}
      </main>
    </>
  )
}

export default App
