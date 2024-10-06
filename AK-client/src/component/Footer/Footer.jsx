import { logo } from "../../img"

const Footer = () => {
  return (
   <>
   <footer className="w-full gap-5 flex flex-col justify-center items-center rounded-b-2xl shadow-2xl mt-3 p-5">
    <div className="mx-auto flex flex-col justify-center items-center gap-3">
      <img className="w-[30px] h-[30px] rounded-full" src={logo} alt="Logo" />
      <span className="text-[12px] font-semibold text-gray-800">Copyright &copy; {new Date().getFullYear()} , Created by AK</span>
    </div>
    
   </footer>
   </>
  )
}

export default Footer