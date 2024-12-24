import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
    return(
        <div className="flex items-center justify-between w-full mx-aut my-20">
            <div className="flex items-center w-[1270px] h-[251px] mx-auto border rounded-[10px]">
                <div className="flex items-center justify-between w-[950px] h-[251px] px-16 bg-[#28A745] border rounded-[10px]">
                    <div className="-mt-5 tracking-wider">
                        <h1 className="text-5xl font-extrabold text-[#fff] tracking-wider">
                            خرید تلفی از
                            <span className="text-[#10411B]"> تورینو </span>
                        </h1>
                        <h2 className="mt-5 text-[32px] font-normal text-[#fff] tracking-wider">به هرکجا که میخواهید!</h2>
                    </div>
                    <Image className="mt-[25px] w-[308px] h-[225px]" src="/images/professional.png" width={310} height={230}  alt="contact"/>
                </div>
                <div className="flex flex-col items-center mx-auto">
                    <div className="flex mb-4 gap-3">
                        <h1 className="text-[28px] font-bold">021-1840</h1>
                        <FaPhone className="mt-2 w-[18px] h-[18px] "/>
                    </div>
                    <button className="w-[175px] h-[41px] bg-[#10411B] text-base font-medium text-[#fff] rounded-[9px]">
                        <Link href="/contact">اطلاعات بیشتر</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact