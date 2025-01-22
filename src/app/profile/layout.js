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
        <div className="flex w-full h-full my-10">
            <div className="flex items-center w-[1270px] mx-auto  border-gray-700">
                <div className="flex gap-10">
                    <ul className="flex flex-col items-center w-[284px] h-[170px] border-2 divide-y rounded-[10px]">
                        <li className={`${pathName !== "/profile" ? "active" : "text-[#28A745] bg-green-100"} w-full h-[56px] py-4 px-3 rounded-t-[10px] text-[#282828]`}>
                            <Link className="flex"  href="/profile">
                                <FaUserLarge className="ml-2 size-4"/>
                                پروفایل
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/my-tours" ? "active" : "text-[#28A745] bg-green-100"} w-full h-[56px] py-4 px-3 text-[#282828]`}>
                            <Link className="flex" href="/profile/my-tours">
                                <RiSunFoggyFill className="ml-2 size-5"/>
                                تورهای من
                            </Link>
                        </li>
                        <li className={`${pathName !== "/profile/transactions" ? "active" : "text-[#28A745] bg-green-100"} w-full h-[56px] py-4 px-3 rounded-b-[10px] text-[#282828]`}>
                            <Link className="flex" href="/profile/transactions">
                                <GiBuyCard className="ml-2 size-4"/>
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
