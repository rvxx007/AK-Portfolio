import  {useContext, useMemo} from 'react'
import ProfileCard from "../componenets/ProfileCard.jsx";
import AppContext from "../contexts/AppContext.jsx";

const About = () => {
  const akObj = useContext(AppContext);

  // Memoize the ProfileCard component to prevent unnecessary re-renders
  const memoizedProfileCard = useMemo(() => {
    return <ProfileCard idAb="cv-download" btnName="CV Download" Obj={akObj} />;
  }, [akObj]);

  return (
      <section
          id="about"
          className="h-full container my-5 py-5 px-5 flex justify-evenly items-center flex-col lg:flex-row border-gray-150 dark:border-none dark:bg-primary rounded-2xl shadow-xl"
      >
        <div id="profile" className="w-full lg:w-[40%]">
          {memoizedProfileCard}
        </div>
        <div className="w-full lg:w-[50%] my-auto flex flex-col gap-5">
          <h1 className="my-3 text-[3rem] font-bold mx-auto text-center text-black dark:text-white">
            {akObj.aboutTitle}
          </h1>
          <p
              id="summery"
              className="text-subtitletxtcol my-3 lg:ms-5 text-md font-semibold text-justify px-3"
          >
            {akObj.about}
          </p>
        </div>

      </section>
  );
};
export default About