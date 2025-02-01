//Icons
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiEditAlt } from "react-icons/bi";

function BankForm() {
    return(
        <div className="flex flex-col w-full h-[205px] md:h-[220px] lg:w-[750px] lg:h-[180px] xl:w-[950px] xl:h-[185px] lg:py-2 lg:px-3 py-4 px-5 md:px-10 lg:px-5 border-2 rounded-[10px] bg-[#fff]">
            <div className="flex items-center justify-between mt-2">
                <h1 className="text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات حساب بانکی</h1>
                <button className="flex text-[13px] md:text-base lg:text-sm font-normal text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-4 md:size-5 lg:size-4"/>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="grid grid-cols lg:grid-cols-2 w-full mt-7 lg:w-[590px] xl:w-[785px] md:mt-5 lg:mt-8 gap-y-5">
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره شبا</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-36 lg:absolute"/>
                </div>
                <div className="flex items-center justify-between lg:mr-14 lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره کارت</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-28 lg:absolute"/>
                </div>
                <div className="flex items-center justify-between lg:relative">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره حساب</h3>
                    <TfiLayoutLineSolid className="mt-0.5 ml-10 lg:mr-36 lg:absolute"/>
                </div>
            </div>
        </div>
    )
}

export default BankForm