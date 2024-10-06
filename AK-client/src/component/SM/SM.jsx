

const SM = (prop) => {
  return (
    <div className="w-[8rem] flex  flex-col justify-center items-center ">
        <img className="w-[120px]  " src={prop.imgObj} alt="" />
        <h2 className="w-full text-center font-bold">{prop.title}</h2>
    </div>
  )
}

export default SM