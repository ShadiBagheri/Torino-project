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
        <div className="flex w-full h-full mt-2 lg:my-10">
            <div className="flex items-center lg:w-[1270px] mx-auto border-gray-700">
                <div className="flex flex-col lg:flex-row gap-10">
                    <ul className="flex items-center w-[310px] h-[50px] -pb-10 border-b-2 lg:flex-col lg:w-[284px] lg:h-[170px] lg:border-2 lg:divide-y lg:rounded-[10px]">
                        <li className={`${pathName !== "/profile" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} w-full lg:h-[56px] py-4 px-3 text-xs font-normal lg:text-sm lg:rounded-t-[10px] text-[#282828]`}>
                            <Link className="flex lg:mt-0.5"  href="/profile">
                                <FaUserLarge className="ml-2 size-3 lg:size-4"/>
                                پروفایل
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/my-tours" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} w-full lg:h-[56px] py-4 px-3 text-xs font-normal lg:text-sm text-[#282828]`}>
                            <Link className="flex lg:mt-0.5" href="/profile/my-tours">
                                <RiSunFoggyFill className="ml-2 size-4 lg:size-5"/>
                                تورهای من
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/transactions" ? "active" : "text-[#28A745] border-b-2 border-[#28A745] lg:border-none lg:bg-green-100"} w-full lg:h-[56px] py-4 px-3 text-xs font-normal lg:text-sm lg:rounded-b-[10px] text-[#282828]`}>
                            <Link className="flex lg:mt-0.5" href="/profile/transactions">
                                <GiBuyCard className="ml-2 size-3 lg:size-4"/>
                                تراکنش ها
                            </Link>
                        </li>
                    </ul>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}
