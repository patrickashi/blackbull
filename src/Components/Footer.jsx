import React from "react"
import Logoblack from "../Assets/Logoblack.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="w-full py-16 px-4 mx-auto bg-gradient-to-t from-[rgb(4,120,87)] to bg-[#6ee7b7] to-[#ccfbf1] font-Montserrat">
           <div className="max-w-[1000px] border-b-4 py-8 text-center mx-auto ">
                
                <div className="flex justify-center">
                    <img className="w-40 bg-[transparent]" src={Logoblack}  alt="/" />
                </div>
                
                <div className="mx-auto">
                        <ul className="flex justify-center gap-8 font-bold py-8 text-[#d1fae5]">
                                <li>Home</li>
                                <li>About</li>
                                <li>Trade</li>
                                <li>Partners</li>
                                <li>Help</li>
                        </ul>
                </div>
                <div className=" mx-auto">
                    <ul className="flex mx-auto justify-center gap-8 text-white">
                        <li> <FaInstagram className="" size={30}/> </li>
                        <li> <FaFacebook className="" size={30}/> </li>
                        <li> <FaLinkedin className="" size={30}/> </li>
                        <li> <FaTwitter className="" size={30}/> </li>
                       
                    </ul>
                   
                </div>
           </div>
           <p className="py-6 text-center font-bold text-xl text-white">© Copyright 2023 Viennoia. All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;