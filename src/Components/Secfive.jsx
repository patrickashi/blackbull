import React from "react"
import  ads1  from "../Assets/ads1.png"

const Secfive = () => {
    return ( 
        <div className="w-full py-8 px-4 font-Montserrat bg-gradient-to-b from-[#047857] to bg-[#6ee7b7] to-[#ccfbf1]">
            <p className="text-center text-4xl sm:text-6xl text-white py-8 font-bold">Your safe space for investing</p>
            <div className="grid mobile:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="flex flex-col justify-center gap-8">
                    <div className="max-w-[480px] mx-auto border rounded-3xl px-4 py-8 bg-[#ccfbf1] backdrop-blur-lg">
                        <h1 className="text-3xl text-[#065f46]">Transparent Trading Conditions</h1>
                        <ul className="text-xl text-[#34d399]">
                            <li>0% Swaps</li>
                            <li>No commission</li>
                            <li>Secure deposits and withdrawals via
                                your preferred payment methods</li>
                        </ul>
                    </div>
                    <div>
                        <div className="max-w-[480px] mx-auto border rounded-3xl px-4 py-8 bg-[#ccfbf1]">
                            <h1 className="text-3xl  text-[#065f46]">Daily Trading Ideas</h1>
                            <ul className="text-xl text-[#34d399]">
                                <li>0% Swaps</li>
                                <li>No commission</li>
                                <li>Secure deposits and withdrawals via
                                    your preferred payment methods</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-[480px] mx-auto border rounded-3xl px-4 py-8 bg-[#ccfbf1]">
                            <h1 className="text-3xl text-[#065f46]">Free educational materials</h1>
                            <ul className="text-xl text-[#34d399]">
                                <li>0% Swaps</li>
                                <li>No commission</li>
                                <li>Secure deposits and withdrawals via
                                    your preferred payment methods</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img className="" src={ads1} alt="/" />
                </div>
            </div>
            
        </div>
     );
}
 
export default Secfive;