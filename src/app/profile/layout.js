"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
//Partials
import AuthProvider from "@/components/partials/provider/AuthProvider";
//Icons
import { FaUserLarge } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import { GiBuyCard } from "react-icons/gi";

export default function ProfileLayout({ children }) {
    const pathName = usePathname();

    return (
        <AuthProvider>
            <div className="container flex items-center w-full mt-3 mb-10 lg:my-10 mx-auto px-10 md:px-0 bg-[#fff]">
                <div className="container flex items-center justify-between lg:w-[1270px] mx-auto">
                    <div className="flex flex-col lg:flex-row w-full gap-10">
                        <nav className="container w-full h-[34px] sm:h-[42px] md:h-[46px] border-b-2 lg:border-0 lg:w-[234px] lg:h-[160px] xl:w-[284px] xl:h-[170px] lg:bg-[#fff] lg:rounded-[10px]">
                            <ul className="flex lg:flex-col items-center justify-between lg:border-2 lg:rounded-[10px] xl:w-full lg:h-full lg:divide-y">
                                <li className={`${pathName !== "/profile" ? "active" : "lg:rounded-t-[10px] lg:bg-green-100"} lg:w-full lg:h-full`}>
                                    <Link className={`${pathName !== "/profile" ? "active" : "text-[#28A745] border-b-2 lg:border-0 border-[#28A745] transform transition duration-300"} flex py-2 px-4 text-xs font-normal sm:text-base md:text-lg lg:text-sm lg:pt-5`}
                                          href="/profile">
                                        <FaUserLarge className="sm:mt-1 ml-2 size-3 lg:size-3 lg:mt-0.5"/>
                                        پروفایل
                                    </Link>
                                </li>
                                <li className={`${pathName !== "/profile/my-tours" ? "active" : "lg:bg-green-100"} lg:w-full lg:border-b-2 lg:h-full`}>
                                    <Link className={`${pathName !== "/profile/my-tours" ? "active" : "text-[#28A745] border-b-2 lg:border-0 border-[#28A745] transform transition duration-300"} flex py-2 px-4 text-xs font-normal sm:text-base md:text-lg lg:text-sm lg:pt-5`}
                                          href="/profile/my-tours">
                                        <RiSunFoggyFill className="ml-2 size-4 lg:size-4"/>
                                        تورهای من
                                    </Link>
                                </li>
                                <li className={`${pathName !== "/profile/transactions" ? "active" : "lg:rounded-b-[10px] lg:bg-green-100"} lg:w-full lg:h-full`}>
                                    <Link className={`${pathName !== "/profile/transactions" ? "active" : "text-[#28A745] border-b-2 lg:border-0 border-[#28A745] transform transition duration-300"} flex py-2 px-4 text-xs font-normal sm:text-base md:text-lg lg:text-sm lg:pt-5`}
                                          href="/profile/transactions">
                                        <GiBuyCard className="sm:mt-1 ml-2 size-3 lg:size-3 lg:mt-0.5"/>
                                        تراکنش ها
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
}
