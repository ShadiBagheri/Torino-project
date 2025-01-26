"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
//Icons
import { FaUserLarge } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import { GiBuyCard } from "react-icons/gi";

export default function ProfileLayout({ children }) {
    const pathName = usePathname();

    return (
        <div className="flex items-center w-full my-10 px-10 bg-fuchsia-300">
            <div className="flex flex-col w-full lg:w-[1270px] mx-auto bg-fuchsia-300">
                <div className="flex items-center w-full mb-5 h-[50px] lg:w-[284px] lg:[170px]  bg-yellow-100">
                    <ul className="flex items-center justify-between w-full mx-auto px-2 border-b-2 border-[#282828] gap-10">
                        <li className={`${pathName !== "/profile" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} pb-[17px] text-xs font-normal lg:text-sm lg:rounded-t-[10px] text-[#282828]`}>
                            <Link className="flex text-center lg:mt-0.5"  href="/profile">
                                <FaUserLarge className="ml-2 size-3 lg:size-4"/>
                                پروفایل
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/my-tours" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} pb-[17px] text-xs font-normal lg:text-sm text-[#282828]`}>
                            <Link className="flex text-center lg:mt-0.5" href="/profile/my-tours">
                                <RiSunFoggyFill className="ml-2 size-4 lg:size-5"/>
                                تورهای من
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/transactions" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} pb-[17px] text-xs font-normal lg:text-sm lg:rounded-b-[10px] text-[#282828]`}>
                            <Link className="flex text-center lg:mt-0.5" href="/profile/transactions">
                                <GiBuyCard className="ml-2 size-3 lg:size-4"/>
                                تراکنش ها
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>{children}</div>
            </div>
        </div>
        // <div className="flex items-center w-full h-full my-10 bg-fuchsia-300">
        //     <div className="container flex lg:w-[1270px] mx-auto border-gray-700 bg-green-300">
        //         <div className="flex flex-col w-full lg:px-0 lg:flex-row mx-auto gap-10 bg-amber-700">
        //             <ul className="flex items-center justify-between h-[50px] mx-auto lg:mx-0 lg:px-0 -pb-10 border-b-2 lg:bg-[#fff] lg:flex-col lg:w-[284px] lg:h-[170px] lg:border-2 lg:divide-y lg:rounded-[10px]">

        //             </ul>
        //             <div>{children}</div>
        //         </div>
        //     </div>
        // </div>
    );
}
