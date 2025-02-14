//Queries
import { useGetUserData } from "@/core/services/queries";
//Icons
import { BiEditAlt } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Info({ infoOpenHandler, email }) {
    const { data } = useGetUserData();

    if (data?.data) return (
        <div className="container flex flex-col h-[169px] mx-auto py-6 px-5 md:px-10 lg:py-2 lg:px-3 lg:w-[750px] lg:h-[130px] xl:w-[950px] xl:h-[130px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:mt-2 text-base font-normal md:text-lg lg:text-base text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto mt-6 md:mt-3 lg:mt-7 lg:pr-5 lg:pl-10">
                {/*Lg - xl size*/}
                <div className="hidden lg:flex mt-1 gap-10">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1">{data?.data.mobile}</p>
                </div>
                <div className="hidden lg:flex gap-20">
                    <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
                    <p className="text-sm font-normal mt-1 text-green-500">{email || "—"}</p>
                </div>
                <button onClick={infoOpenHandler} className="hidden lg:flex gap-2 text-sm font-normal text-[#009ECA] hover:text-blue-300">
                    <BiEditAlt className="size-4"/>
                    افزودن
                </button>
                {/*xs - md size*/}
                <div className="flex items-center justify-between w-full lg:hidden">
                    <h3 className="mt-0.5 text-sm font-light md:text-base ">شماره موبایل</h3>
                    <p className="mt-1 md:mt-3 lg:mt-1 text-sm font-normal md:text-base">{data?.data.mobile}</p>
                </div>
                <div className="flex items-center justify-between w-full mt-5 md:mt-3 lg:hidden">
                    <div className="flex ">
                        <h3 className="mt-0.5 text-sm font-light md:text-base">ایمیل</h3>
                        <TfiLayoutLineSolid className="mt-1 mr-10 md:mt-2 md:mr-20" />
                    </div>
                    <button onClick={infoOpenHandler} className="flex text-[13px] font-normal md:text-base text-[#009ECA] hover:text-blue-300">
                        <BiEditAlt className="ml-1 size-4 md:size-5" />
                        افزودن
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Info;

// import { useState } from "react";
//
// //Icons
// import { BiEditAlt } from "react-icons/bi";
// import { TfiLayoutLineSolid } from "react-icons/tfi";
// import { useGetUserData } from "@/core/services/queries";
//
//
// function Info({  isInfoOpen, setIsInfoOpen, infoOpenHandler }) {
//
//     const { data } = useGetUserData();
//
//     if (data?.data) return (
//         <div className="container flex flex-col h-[169px] mx-auto py-6 px-5 md:px-10 lg:py-2 lg:px-3 lg:w-[750px] lg:h-[130px] xl:w-[950px] xl:h-[130px] border-2 rounded-[10px] bg-[#fff]">
//             <h1 className="lg:mt-2 text-base font-normal md:text-lg lg:text-base text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
//             <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto mt-6 md:mt-3 lg:mt-7 lg:pr-5 lg:pl-10">
//                 {/*Lg - xl size*/}
//                 <div className="hidden lg:flex mt-1 gap-10">
//                     <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
//                     <p className="text-sm font-normal mt-1">{data?.data.mobile}</p>
//                 </div>
//                 <div className="hidden lg:flex gap-20">
//                     <h3 className="mt-0.5 text-sm font-light">ایمیل</h3>
//                     <p className="text-sm font-normal mt-1 text-green-500">{data?.data.email}</p>
//                     {/*<TfiLayoutLineSolid className="mt-1"/>*/}
//                 </div>
//                 <button onClick={(infoOpenHandler) => setIsInfoOpen(!isInfoOpen)} className="hidden lg:flex gap-2 text-sm font-normal text-[#009ECA] hover:text-blue-300">
//                     <BiEditAlt className="size-4"/>
//                     افزودن
//                 </button>
//                 {/*xs - md size*/}
//                 <div className="flex items-center justify-between w-full lg:hidden">
//                     <h3 className="mt-0.5 text-sm font-light md:text-base ">شماره موبایل</h3>
//                     <p className="mt-1 md:mt-3 lg:mt-1 text-sm font-normal md:text-base">{data?.data.mobile}</p>
//                 </div>
//                 <div className="flex items-center justify-between w-full mt-5 md:mt-3 lg:hidden">
//                     <div className="flex ">
//                         <h3 className="mt-0.5 text-sm font-light md:text-base">ایمیل</h3>
//                         <TfiLayoutLineSolid className="mt-1 mr-10 md:mt-2 md:mr-20"/>
//                     </div>
//                     <button onClick={(infoOpenHandler) => setIsInfoOpen(!isInfoOpen)} className="flex text-[13px] font-normal md:text-base text-[#009ECA] hover:text-blue-300">
//                         <BiEditAlt className="ml-1 size-4 md:size-5"/>
//                         افزودن
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Info