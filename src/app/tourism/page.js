"use client";
import { useState } from "react";

function TourismServices() {
    const [isOpen, setIsOpen] = useState(true);

    return(
        <div className="container flex items-center w-full h-full my-10 mx-auto bg-[#fff] dark:accent-slate-800">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:w-[1250px] mx-auto md:gap-8 lg:gap-0">
                <div>
                    <h1>Tourism Services</h1>
                </div>
            </div>
        </div>
    )
}

export default TourismServices