import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//Icons
import { RiHome5Fill } from "react-icons/ri";
import { CiVolumeHigh } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

function MenuBar(){
    const [sidebar, setSidebar] = useState(false);

    const sidebarHandler = () => setSidebar(!sidebar);

    return(
        <div className="container flex flex-col px-10 lg:hidden relative ">
            <div className="flex items-center justify-between w-[570px] mx-auto z-0">
                <button onClick={sidebarHandler}>
                    <Image className="z-0" src="/images/menu.png" width={20} height={26} alt="menu"/>
                </button>
                <button>
                    <Image className="z-0" src="/images/signin.png" width={40} height={40} alt="signin"/>
                </button>
            </div>
            {/* Menubar */}
            {sidebar ?
                <div className="w-full h-full top-0 start-0 backdrop-blur-sm bg-black/20 fixed">
                    <div className="w-[209px] h-full start-0 py-10 px-3 rounded-tl-[12px] rounded-bl-[12px] z-10 bg-[#fff] absolute">
                        <nav>
                            <ul className="flex flex-col items-start justify-between">
                                <li className="flex w-[133px] h-[25px]">
                                    <RiHome5Fill className="ml-3 text-[#28A745] size-6"/>
                                    <Link className="flex w-[109px] h-[25px] mt-1 text-base font-normal text-right text-[#28A745]" href="/">
                                        صفحه اصلی
                                    </Link>
                                </li>
                                <li className="flex w-[182px] h-[25px] mt-9">
                                    <Image className="ml-3 size-5" src="/images/airplane2.png" width={5} height={5} alt="airplaneIcon"/>
                                    <Link className="flex w-[158px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white" href="/">
                                        خدمات گردشگری
                                    </Link>
                                </li>
                                <li className="flex w-[109px] h-[25px] mt-9">
                                    <CiVolumeHigh className="ml-3 size-6"/>
                                    <Link className="flex w-[85px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white" href="/about">
                                        درباره ما
                                    </Link>
                                </li>
                                <li className="flex w-[118px] h-[25px] mt-9">
                                    <LuPhone className="ml-3 size-5"/>
                                    <Link className="w-[94px] h-[25px] text-base font-normal text-right text-[#282828] dark:text-white" href="/">
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> : null}
        </div>
    )
}

export default MenuBar