//Icons
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiEditAlt } from "react-icons/bi";

function BankForm() {
    return(
        <div className="flex flex-col w-[310px] h-[251px] lg:w-[950px] lg:h-[185px] py-4 px-5 border-2 rounded-[10px] bg-[#fff]">
            <div className="flex items-center justify-between mt-2">
                <h1 className="text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب بانکی</h1>
                <button className="flex text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-5"/>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="grid grid-cols-2 w-full mt-8 px-5 gap-y-5">
                <div className="flex">
                    <h3 className="mt-0 .5 text-sm font-light">شماره شبا</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-[105px]"/>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره کارت</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-12"/>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره حساب</h3>
                    <TfiLayoutLineSolid className="mt-0.5 mr-[90px]"/>
                </div>
            </div>
        </div>
    )
}

export default BankForm