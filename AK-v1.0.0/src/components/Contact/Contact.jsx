import { useContext, useState } from "react";
import { parentSectionVariants } from "../../fm/varientsObj";
import { motion } from "motion/react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import loader from "../../assets/loader.svg"

const Contact = () => {
  const ak = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    ph: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // ====================================================== \\
    // this code check here entered number is only digits
    // ======================================================= \\
    if(name==="ph"){
        !value.match(/^\d+$/) && toast.error('please enter only digits');
    }
    // =================================================================== \\

    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };


  function onclear() {
    setInputValue(() => {
      return {
        name: "",
        email: "",
        ph: "",
        msg: "",
      };
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      (!inputValue.name || inputValue.name === "") &&
      (!inputValue.email || inputValue.email === "") &&
      (!inputValue.ph || inputValue.ph === "") &&
      (!inputValue.msg || inputValue.msg === "")
    ) {
      setIsLoading(false);
      return toast.error("all feilds are required.");
    }

    const data = {
      name: inputValue.name.trim(),
      email: inputValue.email.trim(),
      ph: inputValue.ph.trim(),
      msg: inputValue.msg.trim(),
    };

    const config = {
      maxBodyLength: Infinity,
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    data,
    };

    await axios
      .post(import.meta.env.VITE_BE_BASE_URL+"/api/v1/ak/msg/create", config)
      .then((resp) => {
        if(resp.data.success === true) {
            onclear();
          return toast.success(resp.data.msg);
        } else {
          return toast.error(resp.data.msg);
        }
      })
      .catch((error) =>toast.error(error.errors.message))
      .finally(()=>setIsLoading(false))
  };

  const IpObj = [
    {
      id: "name",
      title: "Name",
      type: "text",
      placeholder: "Enter your name",
      min: "2",
      minLen: "2",
      max: "25",
      maxLen: "25",
      val: inputValue.name,
    },
    {
      id: "email",
      title: "Email",
      type: "email",
      placeholder: "Enter your email",
      min: "2",
      minLen: "2",
      max: "25",
      maxLen: "25",
      val: inputValue.email,
    },
    {
      id: "ph",
      title: "Phone",
      type: "tel",
      placeholder: "Enter your phone Number",
      min: "10",
      minLen: "10",
      max: "10",
      maxLen: "10",
      val: inputValue.ph,
    },
  ];

  const cf = {
    twDivClass:
      "bg-secondaryDark p-3 mx-4  flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-lg",
    twLblClass: "text-xl font-bold my-auto",
    twInpClass:
      "w-full lg:w-[416px] bg-bgDark text-xl py-2 px-4 border-2 border-slate-950 hover:border-primaryDark text-primaryDark shadow-lg rounded-lg",
    twDisInpClass:
      " bg-bgDark w-full lg:w-[416px] text-xl py-2 px-4 border-2 border-gray-200 hover:border-primaryDark shadow-lg rounded-lg",
  };

  return (
    <>
      <motion.section
        variants={parentSectionVariants}
        initial="hidden"
        animate="show"
        id="contacts"
        className=" container h-full bg-secondaryDark text-white  flex flex-col justify-center py-10 items-center border-bgDark border-2 hover:border-primaryDark rounded-md shadow-2xl"
      >
        <article className=" w-full px-5 my-10 gap-5 flex flex-col xl:flex-row justify-between items-center">
          <div className=" w-full xl:w-[50%] flex justify-center items-center ">
            <div className=" w-full h-full flex justify-evenly items-center flex-wrap p-3">
              {ak !== undefined ? (
                ak.contacts.map((item) => (
                  <motion.div
                  whileHover={{scale:1.2}}
                    key={item._id}
                    className="flex flex-col justify-between items-center gap-5 p-2 rounded-md shadow-2xl bg-bgDark border-2 border-slate-950 hover:border-primaryDark"
                  >
                    <Link to={item.link}>
                      <img
                        className="w-[60px] h-[60px] p-1 rounded-xl "
                        src={import.meta.env.VITE_BE_BASE_URL+ item.icon}
                        alt={item.title}
                      />

                      <h1 className=" w-full text-center font-semibold text-md">
                        {item.title}
                      </h1>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
          <div className=" w-full xl:w-[50%] relative flex justify-center items-center ">
              <div className={(isLoading===true)?"absolute flex":"hidden"}>
              <img className=" w-[150px]  h-[150px]" src={loader} alt="" />
              </div>

            <form
              onSubmit={handleFormSubmit}
              className=" border-2 border-slate-950 group hover:border-primaryDark shadow-2xl rounded-xl bg-bgDark text-white mx-auto"
            >
              <h1 className="shadow-lg border-2 border-slate-950 group-hover:border-b-primaryDark rounded-t-xl py-4 text-center mb-5 mx-auto text-[1.8rem] font-bold text-white">
                Contact Me
              </h1>
              <div className="flex  flex-col my-5 gap-5">
                {IpObj.map((items) => (
                  <div key={"contact" + items.id} className={cf.twDivClass}>
                    <label className={cf.twLblClass}>{items.title}</label>

                    <motion.input
                    whileHover={{scale:1.1}}
                      onChange={handleChange}
                      className={
                        isLoading === true ? cf.twDisInpClass : cf.twInpClass
                      }
                      min={items.min}
                      minLength={items.minLen}
                      max={items.max}
                      maxLength={items.maxLen}
                      id={items.id}
                      type={items.type}
                      name={items.id}
                      value={items.val}
                      placeholder={items.placeholder}
                      disabled={isLoading ? true : false}
                    />
                  </div>
                ))}

                <div className=" bg-secondaryDark p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                  <label className="text-xl font-bold my-auto ">Message</label>
                  <motion.textarea
                  whileHover={{scale:1.1}}
                    style={{ resize: "none" }}
                    //  className="w-full  text-xl py-2 px-4  border-2 border-gray-200 shadow-lg rounded-lg"
                    className={
                      isLoading === true ? cf.twDisInpClass : cf.twInpClass
                    }
                    onChange={handleChange}
                    value={inputValue.msg}
                    name="msg"
                    id="descp"
                    cols="30"
                    rows="5"
                    placeholder="Write Your Message here..."
                    disabled={isLoading ? true : false}
                  ></motion.textarea>
                </div>
                <div className="bg-secondaryDark dark:bg-primary p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                  <button
                    type="reset"
                    disabled={isLoading ? true : false}
                    onClick={onclear}
                    className={
                      isLoading === true
                        ? "w-full bg-secondaryDark font-bold text-gray-600 text-xl py-2 px-4  border-2 border-slate-950 shadow-lg rounded-lg"
                        : "w-full bg-secondaryDark font-bold text-primaryDark text-xl py-2 px-4  border-2 border-primaryDark shadow-lg rounded-lg"
                    }
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading ? true : false}
                    className={
                      isLoading === true
                        ? "w-full bg-secondaryDark font-bold text-white text-xl py-2 px-4  border-2 border-slate-950 shadow-lg rounded-lg"
                        : "w-full bg-bgDark font-bold text-white text-xl py-2 px-4  border-2 border-gray-950 shadow-lg rounded-lg"
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>
      </motion.section>
    </>
  );
};

export default Contact;
