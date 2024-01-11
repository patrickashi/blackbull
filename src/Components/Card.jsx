import React from "react"

const Card = () => {
    return ( 
        <div className=" max-w-[1240px] py-2 px-4 mx-auto font-Montserrat">
            <div className="max-w-[100%] md:mx-16 grid grid-cols-2 justify-center py-8 bg-gray-100 rounded-3xl shadow-lg shadow-gray-400 hover:scale-105 duration-300  cursor-pointer">
                <div className="border-r-2 px-4 text-center py-2">
                    <h1 className="text-2xl md:text-3xl font-bold py-2">Data Protection</h1>
                    <p className="text-black">
                        Safety first! Your data is
                        secure, and funds are held in
                        segregated accounts.
                    </p>
                </div>
                <div className="text-center px-4 2xl:py-2 mobile:py-8">
                    <h1 className="text-2xl md:text-3xl font-bold py-2">24/7 Support</h1>
                    <p className="text-black">
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