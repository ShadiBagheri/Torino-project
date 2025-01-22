//Icons
import { BiEditAlt } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Info() {
    return(
        <div className="flex flex-col w-[950px] h-[130px] py-4 px-5 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex items-center justify-between w-full mt-8 px-5">
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 mr-10">09193855854</p>
                </div>
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
                    <TfiLayoutLineSolid className="mt-1 mr-[73px]"/>
                </div>
                <button className="flex text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-5"/>
                    افزودن
                </button>
            </div>
        </div>
    )
}

export default Info