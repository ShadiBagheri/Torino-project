"use client";

import Image from "next/image";
import Link from "next/link";


function DropDown({ mobile }) {
return(
        <div className="flex w-[180px] h-[120px] sm:w-[200px] sm:h-[140px] md:w-[210px] lg:w-[220px] xl:w-[246px] lg:h-[152px] mt-[160px] md:mt-52 -ms-12 md:-ms-8 lg:-ms-9 xl:-ms-7 bg-[#fff] border-2 rounded-[11px] z-10 absolute">
            <div className="flex flex-col items-start justify-between">
                <div className="flex w-[178px] h-[38px] sm:w-[198px] sm:h-[40px] md:w-[208px] lg:w-[218px] xl:w-[244px] lg:h-[44px] py-2 px-3 bg-gray-100 rounded-t-[11px]">
                    <Image className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] mt-1 p-1 bg-gray-300 rounded-2xl" src="/images/frame.png" width={20} height={20} alt="icon"/>
                    <h2 className="mt-1.5 mr-3 text-xs sm:text-sm lg:text-base font-medium text-[#10411B]">{mobile}</h2>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="flex w-[178px] h-[38px] sm:w-[198px] sm:h-[40px] md:w-[208px] md:h-[50px] lg:w-[220px] xl:w-[245px] h-[54px] py-2 px-3">
                        <Image className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] mt-0.5 sm:mt-2.5 md:mt-2 lg:mt-1" src="/images/profiledrop.png" width={20} height={20} alt="icon"/>
                        <Link className="mt-1 sm:mt-3 md:mt-2 lg:mt-1.5 mr-3 text-xs sm:text-sm lg:text-base font-medium text-[#10411B]" href="/profile">اطلاعات حساب کاربری</Link>
                    </div>
                    <div className="flex w-[160px] h-[38px] sm:w-[170px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[210px] xl:w-[220px] h-[54px] mx-auto py-2 px-3 rounded-b-[11px] border-t">
                        <Image className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] mt-1 sm:mt-1.5 md:mt-2 lg:mt-1.5 -mr-3" src="/images/logout.png" width={20} height={20} alt="icon"/>
                        <Link className="mt-1 sm:mt-1.5 md:mt-2 lg:mt-1.5 mr-3 text-xs sm:text-sm lg:text-base font-medium text-red-700" href="/">خروج از حساب کاربری</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown