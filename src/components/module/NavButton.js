"use client";

import { useState } from "react";
import Image from "next/image";
//Queries
import { useGetUserData } from "@/core/services/queries";
//Utils
import { e2p } from "@/core/utils/numbers";
//Module
import DropDown from "@/components/module/DropDown";
//Icons
import { SlArrowDown } from "react-icons/sl";




function NavButton() {
    const [dropDown, setDropdown] = useState(false);
    const dropDownHandler = () => {
        setDropdown(!dropDown);
    }

    const { data } = useGetUserData();

    if (data?.data) return(
        <div className="container flex items-center justify-between w-[125px] h-[35px] sm:w-[140px] md:w-[180px] h-[44px] p-2 md:p-4">
            <Image src="/images/profile.png" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" width={20} height={20} alt="login-icon"/>
            <div className="flex items-center w-[108px] h-[28px] mt-2 mr-1 md:mr-2">
                <p className="text-center text-sm sm:text-base md:text-lg font-medium text-[#28A745]">
                    {e2p(data?.data.mobile)}
                </p>
            </div>
            {dropDown && <DropDown mobile={e2p(data?.data.mobile)}/>}
            <SlArrowDown onClick={dropDownHandler} className="mt-1  text-[#28A745] size-3 md:size-4 cursor-pointer"/>
        </div>
    )
}


export default NavButton




