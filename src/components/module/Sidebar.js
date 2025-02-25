import { usePathname } from "next/navigation";
import Link from "next/link";
//Icons
import { RiHome5Fill } from "react-icons/ri";
import { CiVolumeHigh } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { BsAirplane } from "react-icons/bs";

function Sidebar({ closeHandler }){
    const pathName = usePathname();

    return(
        <div className="container flex flex-col lg:hidden mx-auto bg-red-300 relative z-20">
            <div onClick={closeHandler} className="w-full h-full top-0 start-0 backdrop-blur-sm bg-black/20 fixed transition-all">
                <div className="w-[170px] sm:w-[210px] md:w-[250px] h-full py-10 px-3 rounded-tl-[12px] rounded-bl-[12px] z-10 bg-[#fff] absolute">
                    <nav>
                        <ul className="flex flex-col items-start justify-between">
                            <li onClick={closeHandler} className="flex w-[133px] h-[25px]">
                                <RiHome5Fill className={`${pathName !== "/" ? "active" : "text-[#28A745]"} ml-3 text-[#282828] size-5 sm:size-6 md:size-7`}/>
                                <Link className={`${pathName !== "/" ? "active" : "text-[#28A745]"} flex w-[109px] h-[25px] mt-0.5 text-sm sm:text-base md:text-lg font-normal text-right text-[#282828]`} href="/">
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li onClick={closeHandler} className="flex w-[182px] h-[25px] mt-9 md:mt-10">
                                <BsAirplane className={`${pathName !== "/tourism" ? "active" : "text-[#28A745] border-green-600"} ml-3 p-0.5 size-4 sm:size-5 md:size-6 border-2 border-[#282828] rounded`}/>
                                <Link className={`${pathName !== "/tourism" ? "active" : "text-[#28A745]"} flex w-[158px] h-[25px] mt-0.5 text-sm sm:text-base md:text-lg font-normal text-right text-[#282828] dark:text-white`} href="/tourism">
                                    خدمات گردشگری
                                </Link>
                            </li>
                            <li onClick={closeHandler} className="flex w-[109px] h-[25px] mt-9 md:mt-10">
                                <CiVolumeHigh className={`${pathName !== "/about" ? "active" : "text-[#28A745]"} ml-3 size-5 sm:size-6 md:size-7`}/>
                                <Link className={`${pathName !== "/about" ? "active" : "text-[#28A745]"} flex w-[85px] h-[25px] text-sm sm:text-base md:text-lg font-normal text-right text-[#282828] dark:text-white`} href="/about">
                                    درباره ما
                                </Link>
                            </li>
                            <li onClick={closeHandler} className="flex w-[118px] h-[25px] mt-9 md:mt-10">
                                <LuPhone className={`${pathName !== "/contact" ? "active" : "text-[#28A745]"} ml-3 size-4 sm:size-5 md:size-6`}/>
                                <Link className={`${pathName !== "/contact" ? "active" : "text-[#28A745]"} w-[94px] h-[25px] text-sm sm:text-base md:text-lg font-normal text-right text-[#282828] dark:text-white`} href="/contact">
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar