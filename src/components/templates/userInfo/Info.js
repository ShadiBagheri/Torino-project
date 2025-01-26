//Icons
import { BiEditAlt } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Info() {
    //w-[310px] h-[150px]
    return(
        <div className="flex flex-col w-full h-[169px] -mt-4 mx-auto lg:mt-0 lg:w-[950px] lg:h-[130px] py-6 px-5 md:px-10 lg:py-4 lg:px-5 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:mt-2 text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto mt-6 md:mt-3 lg:mt-6 lg:px-5">
                <div className="hidden lg:flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 lg:mr-12">09193855854</p>
                </div>
                <div className="hidden lg:flex">
                    <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
                    <TfiLayoutLineSolid className="mt-1 lg:mr-[75px]"/>
                </div>
                <button className="hidden lg:flex text-sm font-normal text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="ml-2 size-4"/>
                    افزودن
                </button>
                {/*xs - md size*/}
                <div className="flex items-center justify-between w-full lg:hidden">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm lg:font-light">شماره موبایل</h3>
                    <p className="mt-1 md:mt-3 lg:mt-1 text-sm font-normal md:text-base lg:text-sm lg:font-normal">09193855854</p>
                </div>
                <div className="flex items-center justify-between w-full mt-5 md:mt-3 lg:hidden">
                    <div className="flex ">
                        <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm lg:font-light">ایمیل</h3>
                        <TfiLayoutLineSolid className="mt-1 mr-10 md:mt-2 md:mr-20"/>
                    </div>
                    <button className="flex text-[13px] font-normal md:text-base text-[#009ECA] hover:text-blue-300">
                        <BiEditAlt className="ml-1 size-4 md:size-5"/>
                        افزودن
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info