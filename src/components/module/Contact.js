import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
    return(
        <div className="flex items-center justify-between w-full px-5 md:px-0 mx-auto mt-28 mb-16 bg-[#fff]">
            <div className="container flex flex-col md:flex-row items-center w-[400px] h-[290px] sm:w-[500px] md:w-[600px] lg:w-[900px] md:h-[251px] xl:w-[1270px] mx-auto border-2 rounded-[10px] bg-[#fff]">
                <div className="flex items-center justify-between w-full h-[200px] md:w-[400px] lg:w-[600px] md:h-[251px] xl:w-[950px] px-3 sm:px-8 md:px-5 lg:px-10 xl:px-16 bg-[#28A745] rounded-[10px]">
                    <div className="-mt-16 sm:-mt-12 md:mt-0 xl:-mt-5 tracking-wider">
                        <h1 className="text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold text-[#fff] tracking-wider">
                            خرید تلفی از
                            <span className="text-[#10411B]"> تورینو </span>
                        </h1>
                        <h2 className="mt-5 text-lg sm:text-2xl md:text-base lg:text-[20px] xl:text-[32px] font-normal text-[#fff] tracking-wider">به هرکجا که میخواهید!</h2>
                    </div>
                    <Image className="mr-[125px] sm:mr-[210px] md:mr-[120px] lg:mr-[250px] xl:mr-[500px] -mt-6 sm:-mt-7 md:mt-[61px] lg:mt-[46px] w-[210px] h-[225px] sm:w-[240px] sm:h-[230px] xl:mt-[25px] md:w-[240px] md:h-[190px] lg:w-[270px] lg:h-[205px] xl:w-[308px] xl:h-[225px] absolute" src="/images/professional.png" width={310} height={230}  alt="contact"/>
                </div>
                <div className="flex flex-row mt-5 md:mt-0 md:flex-col items-center mx-auto gap-x-8 sm:gap-x-16 md:gap-x-0">
                    <div className="flex md:mb-4 gap-1 md:gap-2 lg:gap-3">
                        <h1 className="text-lg sm:text-2xl md:text-lg lg:text-[28px] font-bold">021-1840</h1>
                        <FaPhone className="w-[14px] h-[14px] mt-1 lg:mt-2 sm:w-[16px] sm:h-[16px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] "/>
                    </div>
                    <button className="w-[160px] h-[45px] sm:w-[180px] sm:h-[48px] md:w-[110px] md:h-[41px] lg:w-[175px] lg:h-[41px] bg-[#10411B] text-sm sm:text-base text-base font-medium text-[#fff] rounded-[9px]">
                        <Link href="/contact">اطلاعات بیشتر</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact