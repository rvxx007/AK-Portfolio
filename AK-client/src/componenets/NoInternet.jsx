import { toast } from "react-toastify"


const NoInternet = () => {
    toast.error("Please Check Your Internet Connection")
  return (
    addEventListener("load",()=>toast.error("No Internet Connection Found"))
  )
}

export default NoInternet