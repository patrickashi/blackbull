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

            <div className="text-white ">
                <button className="border right-0  py-3 font-bold  rounded-md px-11 bg-gradient-to-b from-[#047857] to bg-[#2dd4bf] text-white">Login</button>
            </div>

            <div onClick={handleNav} className="mobile:block md:hidden">
                {nav ? <AiOutlineClose className="text-black" size={20}/> : <AiOutlineMenu className="text-black" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] border-r border-r-gray-900 ease-out duration-500 bg-black" : "fixed left-[-100%]"}>
                <ul className="uppercase p-4 my-12">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;