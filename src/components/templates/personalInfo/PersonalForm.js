//Icons
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiEditAlt } from "react-icons/bi";

function PersonalForm() {
    return(
        <div className="flex flex-col w-full h-[251px] lg:w-[950px] lg:h-[185px] mx-auto py-4 px-5 md:px-10 lg:px-5 border-2 rounded-[10px] bg-[#fff]">
            <div className="flex items-center justify-between mt-2">
                <h1 className="text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات شخصی</h1>
                <button className="flex text-[13px] md:text-base lg:text-sm font-normal text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-4 md:size-5 lg:size-4"/>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="grid grid-cols lg:grid-cols-2 w-full sm:items-center mt-7 md:mt-5 lg:mt-8 lg:px-5 gap-5 md:gap-4 lg:gap-5 gap-y-5">
                <div className="flex items-end justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">نام و نام خانوادگی</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-36 lg:absolute"/>
                </div>
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">کد ملی</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-24 lg:absolute"/>
                </div>
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">جنسیت</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-36 lg:absolute"/>
                </div>
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">تاریخ تولد</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-24 lg:absolute"/>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm