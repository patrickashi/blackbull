import React from "react"
import hero from "../Assets/hero.png"

const Sectone = () => {
    return ( 
        <div className="max-w-[1240px] mx-auto grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 py-16 pb-0 px-4 font-Montserrat">
            <div className=" justify-center align-center">
                <h2 className="font-bold text-4xl mobile:text-left xl:text-7xl 2xl:text-7xl mt-16 py-16 2x:text-center text-[#2B2A4C]">Trade with a reliable broker..</h2>
                <p className="py-8">Trade across multiple markets with the most stable
                    and reliable pricing in the industry
                </p>
                <div className="py-16 md:text-left">
                    <button className="border text-2xl mr-4 py-3  rounded-lg px-9 bg-gradient-to-tr from-[#047857] to bg-[#2dd4bf] text-white">Register</button>
                    <button className="border-2 text-2xl border-[#2dd4bf]  py-3 px-9 text-[#2dd4bf] rounded-lg px-4 ">Demo</button>
                </div>

            </div>
            <div className="">
                <img className="w-300 h-200" src={hero} size={20} alt="/" />
            </div>
        </div>
     );
}
 
export default Sectone;