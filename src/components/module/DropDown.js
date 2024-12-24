import Image from "next/image";
import Link from "next/link";
//Queries
import { useGetUserData } from "@/core/services/queries";


function DropDown( {mobile} ) {

    const { data } = useGetUserData();

    if (data?.data) return(
        <div className="flex w-[246px] h-[152px] mt-52 -ms-7 bg-[#fff] rounded-[11px] z-10 absolute">
            <div className="flex flex-col items-start justify-between">
                <div className="flex w-[246px] h-[44px] py-2 px-3 bg-gray-100 rounded-t-[11px]">
                    <Image className="w-[24px] h-[24px] mt-1 p-1 bg-gray-300 rounded-2xl" src="/images/frame.png" width={20} height={20} alt="icon"/>
                    <h2 className="mt-1.5 mr-3 text-base font-medium text-[#10411B]">{mobile}</h2>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="flex w-[246px] h-[54px] py-2 px-3">
                        <Image className="w-[20px] h-[20px] mt-2" src="/images/profiledrop.png" width={20} height={20} alt="icon"/>
                        <Link className="mt-2 mr-3 text-base font-medium text-[#10411B]" href="/profile">اطلاعات حساب کاربری</Link>
                    </div>
                    <div className="flex w-[220px] h-[54px] mx-auto py-2 px-3 rounded-b-[11px] border-t">
                        <Image className="w-[20px] h-[20px] mt-2 -mr-3" src="/images/logout.png" width={20} height={20} alt="icon"/>
                        <Link className="mt-2 mr-3 text-base font-medium text-red-700" href="/">خروج از حساب کاربری</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown