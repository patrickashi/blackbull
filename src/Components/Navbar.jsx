import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import blackbullLogo from "../Assets/blackbullLogo.jpg"


const  Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }
    return ( 
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-Montserrat">
            <img className="w-40" src={blackbullLogo} size={20} alt="/" />
            <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-[#10b981] mx-auto font-bold ">
                <li className="p-4 hover:underline">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Trade</li>
                <li className="p-4">Partners</li>
                <li className="p-4">Help</li>
            </ul>

            <div className="text-white hidden mobile:hidden 2xl:block xl:block">
                <button className="border right-0  py-3 font-bold  rounded-md px-11 bg-gradient-to-b from-[#047857] to bg-[#2dd4bf] text-white">Login</button>
            </div>

            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden">
                {nav ? <AiOutlineClose className="text-black" size={20}/> : <AiOutlineMenu className="text-black" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] border-r border-r-gray-900 ease-out duration-500 bg-black" : "fixed left-[-100%]"}>
                <ul className="p-4 my-6">
                    <li className="p-4 border-l border-blue-600">Home</li>
                    <li className="p-4 border-l border-green-600">About</li>
                    <li className="p-4 border-l border-red-600">Trade</li>
                    <li className="p-4 border-l border-pink-600">Partners</li>
                    <li className="p-4 border-l border-yellow-600">Help</li>
                </ul>

               <div className="">
                    <button className=" my-4 w-[95%] mx-2  py-3  rounded-md px-11 bg-gradient-to-b from-[#047857] to bg-[#2dd4bf] text-white">Login</button>
                    <button className=" w-[95%] mx-2  py-3 border-2 border-[#2dd4bf]  rounded-md px-11  text-[#2dd4bf]">Sign up</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;