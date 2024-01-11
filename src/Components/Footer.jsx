import React from "react"
import Logoblack from "../Assets/Logoblack.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="w-full py-8 px-4 mx-auto bg-gradient-to-t from-[rgb(4,120,87)] to bg-[#6ee7b7] to-[#ccfbf1] font-Montserrat">
           <div className="max-w-[1000px] border-b-2 py-8 text-center mx-auto ">
                
                <div className="flex justify-center">
                    <img className="w-40 bg-[transparent]" src={Logoblack}  alt="/" />
                </div>
                
                <div className="mx-auto">
                        <ul className="flex justify-center gap-2 py-4 text-[#d1fae5]">
                                <li>Home</li>
                                <li>About</li>
                                <li>Trade</li>
                                <li>Partners</li>
                                <li>Help</li>
                        </ul>
                </div>
                <div className=" mx-auto">
                    <ul className="flex mx-auto justify-center gap-4 text-white">
                        <li> <FaInstagram className="" size={20}/> </li>
                        <li> <FaFacebook className="" size={20}/> </li>
                        <li> <FaLinkedin className="" size={20}/> </li>
                        <li> <FaTwitter className="" size={20}/> </li>
                       
                    </ul>
                   
                </div>
           </div>
           <p className="pt-6 text-center text-md text-white mobile:text-sm">© Copyright 2024 Viennoia. All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;