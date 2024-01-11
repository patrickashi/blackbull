import React from "react"
import stockimg1 from "../Assets/stockimg1.jpg"

const Secfour = () => {
    return ( 
        <div className="py-16 relative w-full h-full px-4 cover font-Montserrat bg-center " style={ { backgroundImage: `url(${stockimg1})`, height: "520px"}}>
            <div className="absolute left-0 top-0 w-full h-full  bg-[#10b981]/90 text-white justify-center ">
             
                    <h1 className="font-bold text-6xl text-center mt-16"> Ready to get Started?</h1>
                    <p className=" text-2xl text-[f8fafc]/90 py-12 text-center">We are constantly improving our product to make your Trading experience better.</p>
                    <div className="justify-center flex mt-12">
                        <button className=" text-2xl  py-3 px-10 text-[#2dd4bf] rounded-lg px-4 bg-gradient-to-r from-[white] to-[#e5e7eb] to-[#e5e7eb]">Register</button>
                    </div>
                
            </div>
        </div>
     );
}
 
export default Secfour;