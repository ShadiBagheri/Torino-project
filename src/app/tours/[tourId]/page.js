import Image from "next/image";
import Link from "next/link";
//Services
import { serverDataFetch } from "@/core/services/http";
//Template
import ReservationBtn from "@/components/templates/ReservationBtn";
//Icons
import { IoMap } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { LuCalendarArrowUp, LuCalendarArrowDown } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiShieldUserLine } from "react-icons/ri"


async function TourDetails({ params }) {
    const tourData = await serverDataFetch(`tour/${params.tourId}`, null, {
        cache: "no-store",
    });

    return (
        <div className="container flex items-center w-full lg:h-screen mx-auto py-10 px-10 lg:bg-[#F3F3F3]">
            <div className="flex flex-col mt-5 mb-16 mx-auto lg:w-[1270px] lg:h-[427px] lg:mt-0 lg:mb-0 lg:py-8 lg:px-6 lg:bg-[#fff] lg:border rounded-[10px]">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full gap-10 mx-auto">
                    <Image className="w-full h-[220px] sm:h-[380px] md:h-[450px] lg:w-[397px] lg:h-[265px] rounded-xl" src={tourData.image} width={400} height={400} alt="img"/>
                    <div className="container w-full flex flex-col -mt-5 items-center justify-between mx-auto lg:mt-0">
                        <div className="w-full flex flex-col items-center md:items-start md:mt-4 lg:mt-0">
                            <div className="flex items-center justify-between w-full md:flex-col md:items-start">
                                <h1 className="text-2xl lg:text-[32px] font-bold">{tourData.title}</h1>
                                <h3 className="text-[15px] font-medium md:mt-4 lg:mt-6 lg:mr-0 md:text-lg lg:text-xl lg:font-normal text-[#282828]">{tourData.time}</h3>
                            </div>
                            <div className="flex lg:items-start mt-4 gap-7 lg:mt-8 lg:gap-8">
                                <div className="flex">
                                    <Image className="w-[16px] h-[16px] sm:w-[18px] lg:h-[18px] lg:mt-1 ml-2" src="/images/user-tick.png" width={24} height={24} alt="icon"/>
                                    <p className="text-[13px] font-normal  sm:text-lg lg:text-xl lg:font-normal text-[#7D7D7D]">تورلیدر از مبدا</p>
                                </div>
                                <div className="flex">
                                    <IoMap className="mt-1 ml-2 text-gray-500 size-3 lg:size-4"/>
                                    <p className="text-[13px] font-normal sm:text-lg lg:text-xl lg:font-normal text-[#7D7D7D]">برنامه سفر</p>
                                </div>
                                <div className="flex">
                                    <Image className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] lg:mt-1 ml-2" src="/images/medal-star.png" width={24} height={24} alt="icon"/>
                                    <p className="text-[13px] font-normal sm:text-lg lg:text-xl lg:font-normal text-[#7D7D7D]">تضمین کیفیت</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center justify-between w-full mx-auto mt-10">
                                <h1 className="mt-3 text-[28px] font-medium text-[#009ECA]">{tourData.price}
                                    <span className="mr-2 text-sm font-normal text-[#282828]">تومان</span>
                                </h1>
                                <ReservationBtn id={params.id}/>
                        </div>
                    </div>
                </div>
                {/*Second-Section*/}
                <div className="grid grid-cols-3 md:flex items-center justify-between w-full mt-8 mx-auto gap-y-4 lg:gap-0 lg:mt-6 lg:flex">
                    <div className="flex flex-col items-center lg:items-start lg:pl-14 lg:h-[85px] lg:border-l-2">
                        <div className="flex mt-2">
                            <TbRoute className="mt-0.5 ml-2 size-3 lg:size-4"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">مبدا</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">{tourData.origin.name}</p>
                    </div>
                    <div className="flex flex-col items-center ml-5 lg:items-start lg:h-[85px] lg:pl-14 lg:border-l-2">
                        <div className="flex mt-2">
                            <LuCalendarArrowUp className="mt-0.5 ml-2 size-3 lg:size-4"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">تاریخ رفت</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">{tourData.start}</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start lg:pl-14 lg:h-[85px] lg:border-l-2">
                        <div className="flex mt-2">
                            <LuCalendarArrowDown className="mt-0.5 ml-2 size-3 lg:size-4"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">تاریخ برگشت</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">{tourData.end}</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start lg:pl-14 lg:h-[85px] lg:border-l-2">
                        <div className="flex mt-2">
                            <MdOutlineConnectingAirports className="mt-0.5 ml-2 size-4 lg:size-5"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">حمل و نقل</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">{tourData.fleetVehicle}</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start lg:pl-14 lg:h-[85px] lg:border-l-2">
                        <div className="flex mt-2">
                            <HiOutlineUsers className="mt-0.5 ml-2 size-3 lg:size-4"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">ظرفیت</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">
                            حداکثر{tourData.availableSeats} نفر
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start lg:pl-14 lg:h-[85px]">
                        <div className="flex mt-2">
                            <RiShieldUserLine className="ml-2 size-4 lg:size-5"/>
                            <p className="text-sm lg:text-lg font-normal text-gray-500">بیمه</p>
                        </div>
                        <p className="mt-2 text-xs lg:text-base font-medium">دارای بیمه میباشد.</p>
                    </div>
                </div>
                <div className="flex flex-row-reverse lg:hidden items-center justify-between mt-8">
                    <h1 className="mt-3 text-2xl font-medium text-[#009ECA]">{tourData.price}
                        <span className="mr-2 text-[10px] font-normal text-[#282828]">تومان</span>
                    </h1>
                    <ReservationBtn id={params.id}/>
                </div>
            </div>
        </div>
    );
}

export default TourDetails