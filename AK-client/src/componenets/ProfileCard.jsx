import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext.jsx";

const ProfileCard = ({ idAb, btnName }) => {
  const akObj = useContext(AppContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCardDetails = () => setIsExpanded(!isExpanded);

  return (
    <main
      className={`w-full lg:w-[422px] border-2 border-gray-150 dark:border-gray-800 rounded-2xl mx-auto dark:bg-secondary m-7 shadow-2xl`}
    >
      <header className="bg-white dark:bg-primary border-b-2 border-gray-150 dark:border-gray-800 rounded-t-2xl">
        <nav className="flex justify-between p-4">
          <div>
            <h2 id="email" className="text-xl font-bold text-black dark:text-white">
              {akObj.email}
            </h2>
          </div>
          <div className="flex gap-3 items-center">
            <span
              className={`w-5 h-5 cursor-pointer bg-[#FB4644] rounded-full ${
                isExpanded ? "opacity-50" : ""
              }`}
              onClick={toggleCardDetails}
            />
            <span className="w-5 h-5 cursor-pointer bg-[#FCBE2A] rounded-full" />
            <span className="w-5 h-5 cursor-pointer bg-[#29C841] rounded-full" />
          </div>
        </nav>
      </header>
      <div
        id="pro-pic"
        className={`w-full h-[422px] mx-auto flex justify-center items-center bg-white dark:bg-secondary flex-col `}
      >
        {isExpanded && (
          <>
            <img
              className="w-[10rem] h-[10rem] mx-auto my-auto rounded-3xl"
              src={`https://ak-portfolio-server.onrender.com${akObj.logo}`}
              alt="logo"
            />
            <div className="w-full mx-auto my-auto flex flex-col justify-evenly items-center">
              <h1 className="text-3xl text-black dark:text-white font-bold">{akObj.name}</h1>
              <h4 className="text-gray-500 text-xl font-semibold">{akObj.ph}</h4>
              <h4 className="text-gray-500 text-xl font-semibold">{akObj.email}</h4>
            </div>
          </>
        )}
        {!isExpanded && (
          <img
            id="pp"
            className="h-[422px] grayscale mx-auto "
            src={`https://ak-portfolio-server.onrender.com${akObj.img}`}
            alt="Akash kawale"
          />
        )}
      </div>
      <footer className="flex border-gray-150 dark:border-gray-800 rounded-b-2xl">
        <span
          id={idAb}
          className={`w-full hover:bg-black dark:text-white hover:text-white cursor-pointer dark:bg-primary mx-auto text-center text-lg font-semibold p-3 rounded-b-2xl`}
          onClick={() => { /* Handle button click here */}
          }
        >
          {btnName}
        </span>
      </footer>
    </main>
  );
};

export default ProfileCard;