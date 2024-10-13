import { useContext, useMemo } from "react";
import AppContext from "../contexts/AppContext.jsx";
import ProfileCard from "../componenets/ProfileCard.jsx";

const Intro = () => {
  const akObj = useContext(AppContext);

  // Memoize the ProfileCard component to prevent unnecessary re-renders
  const memoizedProfileCard = useMemo(() => {
    return <ProfileCard idAb="cv-download" btnName="CV Download" Obj={akObj} />;
  }, [akObj]);

  return (
    <section
      id="home"
      className="h-full container my-5 flex flex-col lg:flex-row border-2 border-gray-150 dark:border-none  bg-white dark:bg-primary rounded-2xl shadow-xl"
    >
      <div className="w-full lg:w-[50%] my-auto flex flex-col gap-5">
        <h1 className="my-3 text-[3rem] font-bold mx-auto text-center dark:text-white">
          {akObj.headTitle}
        </h1>
        <p
          id="summery"
          className="font-semibold text-gray-600 dark:text-subtitletxtcol my-3 lg:ms-5 text-md font-semibold text-justify px-3"
        >
          {akObj.headSub}
        </p>
      </div>
      <div id="profile" className="w-full lg:w-[50%] px-5">
        {memoizedProfileCard}
      </div>
    </section>
  );
};

export default Intro;