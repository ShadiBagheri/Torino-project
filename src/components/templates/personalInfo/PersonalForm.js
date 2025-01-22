//Icons
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiEditAlt } from "react-icons/bi";

function PersonalForm() {
    return(
        <div className="flex flex-col w-[950px] h-[185px] py-4 px-5 border-2 rounded-[10px] bg-[#fff]">
            <div className="flex items-center justify-between">
                <h1 className="text-base font-normal text-[#282828] tracking-wide">اطلاعات شخصی</h1>
                <button className="flex text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-5"/>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="grid grid-cols-2 w-full mt-8 px-5 gap-y-5">
                <div className="flex">
                    <h3 className="mt-0 .5 text-sm font-light">نام و نام خانوادگی</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-16"/>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">کد ملی</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-16"/>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">جنسیت</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-[118px]"/>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">تاریخ تولد</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-[52px]"/>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm