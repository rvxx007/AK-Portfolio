const SM = (prop) => {
    const {imgs, title} =prop
    return (
        <div className="w-[9rem] h-[9.5rem] flex flex-col justify-center items-center text-center gap-2 bg-white dark:bg-primary p-2  rounded-xl shadow-xl">
            <img
                className={`w-[90px] h-[90px] ${!imgs && 'bg-gray-200'}`}
                src={`https://ak-portfolio-server.onrender.com${imgs}`}
                alt={title || "Image"}
            />
            <h2 className="w-full text-black dark:text-white text-center font-bold">{title}</h2>
        </div>
    )
}

export default SM