import React from "react"
import blackbullLogo from "../Assets/blackbullLogo.jpg"

const Footer = () => {
    return ( 
        <div className="w-full py-16 px-4 mx-auto bg-gradient-to-t from-[rgb(4,120,87)] to bg-[#6ee7b7] to-[#ccfbf1] ">
           <div className="max-w-[1000px] border-b-4 py-16 text-center mx-auto ">
                
                <div className="flex justify-center">
                    <img className="w-40 bg-[transparent]" src={blackbullLogo}  alt="/" />
                </div>
                
                <div className="mx-auto">
                        <ul className="flex justify-center gap-8 font-bold py-8">
                                <li>Home</li>
                                <li>Skills</li>
                                <li>Portfolio</li>
                                <li>Blog</li>
                        </ul>
                </div>
           </div>
           <p className="py-6 text-center font-bold text-xl text-white">© Copyright 2023 Viennoia. All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;