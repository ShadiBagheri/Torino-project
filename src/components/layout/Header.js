"use client";
import Link from "next/link";
import Image from "next/image";
//Module
import Sidebar from "@/components/module/Sidebar";
import {usePathname} from "next/navigation";

function Header() {
    const pathName = usePathname();

    return(
        <header className="container flex items-center w-full mx-auto h-[64px] md:h-[70px] lg:h-[74px] py-3 px-10 lg:px-0 bg-[#fff] shadow-md dark:bg-slate-800 dark:shadow-white">
            <Sidebar/>
            {/*lg size*/}
            <div className="container hidden lg:flex items-center justify-between w-[1270px] mt-1 mx-auto">
                <div className="flex items-center justify-between w-[730px]">
                    <Image src="/images/torino.png" width={146} height={44} alt="torino-logo"/>
                    <nav className="container w-[499px] h-[25px] ml-8 px-10">
                        <ul className="flex items-center justify-between">
                            <li>
                                <Link className={`${pathName !== "/" ? "active" : "text-[#28A745]"} w-[109px] h-[25px] text-base font-normal text-right text-[#282828]`} href="/">
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/tourism" ? "active" : "text-[#28A745]"} w-[158px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white`} href="/tourism">
                                    خدمات گردشگری
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/about" ? "active" : "text-[#28A745]"} w-[85px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white`} href="/about">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/contact" ? "active" : "text-[#28A745]"} w-[94px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white`} href="/contact">
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button className="container flex items-center justify-between w-[166px] h-[44px] p-2 border-2 border-solid border-[#28A745] rounded-[8px]">
                    <Image className="mr-2" src="/images/profile.png" width={20} height={20} alt="login-icon"/>
                    <div className="flex w-[108px] h-[28px]">
                        <p className="text-center text-lg font-medium text-[#28A745]">ورود
                            <span className="mx-1">|</span>
                            ثبت نام
                        </p>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header