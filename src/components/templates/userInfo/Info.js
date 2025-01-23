//Icons
import { BiEditAlt } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Info() {
    //w-[310px] h-[150px]
    return(
        <div className="container flex flex-col w-full -mt-4 lg:mt-0 lg:w-[950px] lg:h-[130px] py-4 px-2.5 lg:px-5 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:mt-2 text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="container flex flex-col lg:flex-row items-center justify-between w-full mt-6 lg:mt-8 lg:px-5">
                <div className="hidden lg:flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 lg:mr-10">09193855854</p>
                </div>
                <div className="hidden lg:flex">
                    <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
                    <TfiLayoutLineSolid className="mt-1 mr-[73px]"/>
                </div>
                <button className="hidden lg:flex text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-5"/>
                    افزودن
                </button>
                {/*sm size*/}
                <div className="flex items-center justify-between w-full lg:hidden">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 lg:mr-10">09193855854</p>
                </div>
                <div className="flex items-center justify-between w-full mt-5 lg:hidden">
                    <div className="flex ">
                        <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
                        <TfiLayoutLineSolid className="mt-1 mr-10"/>
                    </div>
                    <button className="flex text-sm font-normal text-[#009ECA] hover:text-blue-300">
                        <BiEditAlt className="ml-1 size-4"/>
                        افزودن
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info