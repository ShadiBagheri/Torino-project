"use client";
import Image from "next/image";

export default function Error() {
    return(
        <div className="flex items-center justify-between w-[1188px] my-24 mx-auto">
            <div className="flex flex-col items-end mb-8">
                <h1 className="mt-[-10] text-4xl font-semibold text-[#282828]">اتصال با سرور برقرار نیست!</h1>
                <p className="text-4xl font-semibold text-[#282828]">لطفا بعدا دوباره امتحان کنید.</p>
            </div>
            <Image className="" src="/images/Error Lamp Robot.png" width={555} height={555} alt="error"/>
        </div>
    )
}

