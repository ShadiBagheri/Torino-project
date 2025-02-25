"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
//Module
import Sidebar from "@/components/module/Sidebar";
import AuthForm from "@/components/templates/authForm";
import SignupBtnSm from "@/components/module/SignupBtnSm";
import {useState} from "react";


function Header() {
    const pathName = usePathname();
    const [sidebar, setSidebar] = useState(false);

    const sidebarHandler = () => setSidebar(!sidebar);
    const closeHandler = () => setSidebar(!sidebar);

    return(
        <header className="flex items-center w-full mx-auto h-[64px] md:h-[70px] lg:h-[74px] py-3 px-10 lg:px-0 bg-[#fff] shadow-md dark:bg-slate-800 dark:shadow-white">
            <div className="flex lg:hidden items-center justify-between w-full mx-auto z-10">
                <div>
                    <button onClick={sidebarHandler}>
                        <Image className="w-[20px] h-[16px] sm:w-[35px] sm:h-[25px] md:w-[38px] md:h-[28px] z-0" src="/images/menu.png" width={28} height={34} alt="menu"/>
                    </button>
                    {sidebar && <Sidebar closeHandler={closeHandler}/>}
                </div>
                <div className="z-10">
                    <AuthForm/>
                </div>
            </div>
            {/*lg size*/}
            <div className="container hidden lg:flex items-center justify-between w-[1270px] mt-1 mx-auto">
                <div className="flex items-center justify-between w-[730px]">
                    <Image src="/images/torino.png" width={146} height={44} alt="torino-logo"/>
                    <nav className="container w-[499px] h-[25px] ml-8 px-10">
                        <ul className="flex items-center justify-between">
                            <li>
                                <Link className={`${pathName !== "/" ? "active" : "text-[#28A745]"} w-[109px] h-[25px] text-base font-normal text-right text-[#282828] hover:text-[#28A745]`} href="/">
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/tourism" ? "active" : "text-[#28A745]"} w-[158px] h-[25px] text-base font-normal text-right text-[#282828] hover:text-[#28A745] dark:text-white`} href="/tourism">
                                    خدمات گردشگری
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/about" ? "active" : "text-[#28A745]"} w-[85px] h-[25px] text-base font-normal text-right text-[#282828] hover:text-[#28A745] dark:text-white`} href="/about">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathName !== "/contact" ? "active" : "text-[#28A745]"} w-[94px] h-[25px] text-base font-normal text-right text-[#282828] hover:text-[#28A745] dark:text-white`} href="/contact">
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="z-10">
                    <AuthForm/>
                </div>
            </div>
        </header>
    )
}

export default Header