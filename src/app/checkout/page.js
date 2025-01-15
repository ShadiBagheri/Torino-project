import Image from "next/image";
//Icons
import { IoCalendarOutline } from "react-icons/io5";

function CheckOutPage() {
    return(
        <div className="container flex items-center w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
            <div className="flex items-center justify-between w-[1270px] h-[250px] mx-auto gap-6 bg-blue-300">
                {/*First Section*/}
                <div className="flex mx-auto p-5 lg:w-[910px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
                    <div>
                        <div className="flex">
                            <Image className="w-[24px] h-[24px] rounded-xl" src="/images/profile5.png" width={25} height={25} alt="img"/>
                            <h1 className="mr-2 text-2xl font-normal">مشخصات مسافر</h1>
                        </div>
                        <form className="flex flex-wrap">
                            <input className="border" type="text" placeholder="نام و نام خانوادگی"/>
                            <input className="border" type="number" placeholder="کدملی"/>
                            <div className="flex">
                                <IoCalendarOutline/>
                                <input className="border" type="text" placeholder="تاریخ تولد"/>
                            </div>
                            <select className="border">
                                <option selected>جنسیت</option>
                                <option>زن</option>
                                <option>مرد</option>
                            </select>
                        </form>
                    </div>
                </div>
                {/*Second section*/}
                <div className="flex mx-auto lg:w-[335px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">

                </div>
            </div>
        </div>
    )
}

export default CheckOutPage