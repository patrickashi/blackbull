import React from "react"

const Card = () => {
    return ( 
        <div className=" max-w-[1240px] py-16 px-4 mx-auto font-mono">
            <div className="max-w-[1000px] w-full md:mx-16 grid grid-cols-2 justify-evenly bg-gray-300 py-16 px-4 rounded-3xl shadow-xl shadow-gray-400 hover:scale-105 duration-300  cursor-pointer">
                <div className="border-r-4 px-4 text-center py-8">
                    <h1 className="text-2xl md:text-3xl font-bold py-2">Data Protection</h1>
                    <p className="text-white font-bold">
                        Safety first! Your data is
                        secure, and funds are held in
                        segregated accounts.
                    </p>
                </div>
                <div className="text-center px-4 py-8">
                    <h1 className="text-2xl md:text-3xl font-bold py-2">24/7 Support</h1>
                    <p className="text-white font-bold">
                        Get a reply in less than a
                        minute in live chat or
                        schedule a callback.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;