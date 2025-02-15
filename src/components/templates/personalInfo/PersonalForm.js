//Queries
import { useGetUserData } from "@/core/services/queries";
//Icons
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiEditAlt } from "react-icons/bi";

function PersonalForm({ personalForm, personalOpenHandler }) {
    const { data } = useGetUserData();

    if (data?.data) return(
        <div className="flex flex-col w-full h-[251px] mx-auto py-4 px-5 md:px-10 lg:py-2 lg:px-3 lg:w-[750px] lg:h-[180px] xl:w-[950px] xl:h-[185px] border-2 rounded-[10px] bg-[#fff]">
            <div className="flex items-center justify-between mt-2">
                <h1 className="text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات شخصی</h1>
                <button onClick={personalOpenHandler} className="flex text-[13px] md:text-base lg:text-sm font-normal text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-4 md:size-5 lg:size-4"/>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="grid grid-cols lg:grid-cols-2 w-full sm:items-center mt-7 lg:w-[590px] xl:w-[785px] md:mt-5 lg:mt-8 gap-5 md:gap-4 gap-y-5">
                <div className="flex items-end justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">نام و نام خانوادگی</h3>
                    <p className="text-sm font-normal mt-0.5 lg:mr-36 lg:absolute">
                        {personalForm.fullName || <TfiLayoutLineSolid className="mt-0.5 lg:-mt-4 ml-10 lg:absolute"/>}
                    </p>
                </div>
                <div className="flex items-center justify-between lg:mr-12 lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">کد ملی</h3>
                    <p className="text-sm font-normal mt-0.5 lg:mr-28 lg:absolute">
                        {personalForm.nationalCode || <TfiLayoutLineSolid className="mt-05 lg:-mt-1.5 ml-10 lg:-mr-1 lg:absolute"/>}
                    </p>
                </div>
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">جنسیت</h3>
                    <p className="text-sm font-normal mt-0.5 lg:mr-36 lg:absolute">
                        {personalForm.gender || <TfiLayoutLineSolid className="mt-0.5 lg:-mt-1.5 ml-10 lg:absolute"/>}
                    </p>
                </div>
                <div className="flex items-center justify-between lg:mr-12 lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">تاریخ تولد</h3>
                    <p className="text-sm font-normal mt-0.5 lg:mr-28 lg:absolute">
                        {personalForm.birthDate || <TfiLayoutLineSolid className="mt-0.5 lg:-mt-1.5 ml-10 lg:-mr-1 lg:absolute"/>}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm