"use client";

import { useState } from "react";
import Image from "next/image";
//Queries
import { useGetUserData } from "@/core/services/queries";
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
        <div className="container flex items-center justify-between w-[180px] h-[44px] p-4">
            <Image src="/images/profile.png" width={20} height={20} alt="login-icon"/>
            <div className="flex items-center w-[108px] h-[28px] mt-2 mr-2">
                <p className="text-center text-lg font-medium text-[#28A745]">
                    {data?.data.mobile}
                </p>
            </div>
            {dropDown && <DropDown mobile={data?.data.mobile}/>}
            <SlArrowDown onClick={dropDownHandler} className="mt-1 text-[#28A745] size-4 cursor-pointer"/>
        </div>
    )
}


export default NavButton




