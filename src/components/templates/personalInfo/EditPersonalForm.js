"use client";

//Icons
import { IoCalendarOutline } from "react-icons/io5";
//Date Picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css";


function EditPersonalForm() {
    return(
        <div className="container flex flex-col h-[390px] mx-auto py-6 px-5 md:px-10 lg:py-4 lg:px-0 lg:w-[750px] lg:h-[180px] xl:w-[950px] xl:h-[260px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">ویرایش اطلاعات شخصی</h1>
            <form className="flex flex-col w-full my-5 bg-red-300">
                {/*This size is*/}
                <div className="flex flex-col gap-y-6 bg-yellow-300">
                    <div className="w-full h-[40px] md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[45px] px-2 relative bg-blue-900">
                       <input type="text" id="full_name"
                       className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                       placeholder=" "
                       />
                       <label htmlFor="full_name"
                       className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            نام و نام خانوادگی
                        </label>
                    </div>
                    <div className="w-full h-[40px] md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[45px] px-2 relative">
                        <input type="number" id="code"
                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                               placeholder=" "
                        />
                        <label htmlFor="code"
                               className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            کد ملی
                        </label>
                    </div>
                    <div id="date" className="peer relative flex items-center w-full h-[45px] md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[47px] px-4 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
                        <IoCalendarOutline className="ml-1 text-gray-500"/>
                        <DatePicker
                            name="birthDate"
                            calendar={persian}
                            calendarPosition="bottom-start"
                            locale={persian_fa}
                            className="green"
                            animations={[opacity()]}
                            placeholder="تاریخ تولد"
                            style={{
                                width: "100%",
                                marginTop: "5px",
                                alignItems: "start",
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                                color: "gray",
                            }}
                        />
                    </div>
                    <div className="w-full h-[40px] -mt-1 md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[45px] px-2 relative">
                        <select id="gender" className="-mr-2 absolute flex px-3 pb-2 pt-3 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 focus:outline-none focus:border-gray-400 peer">
                            <option value="مرد">مرد</option>
                            <option value="زن">زن</option>
                        </select>
                        <label htmlFor="gender"
                               className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            جنسیت
                        </label>
                    </div>
                </div>
                <div className="flex items-center w-full mt-3 lg:border-t-2 lg:px-3 lg:my-5 bg-red-100">
                    <div className="flex items-center justify-between w-full mt-3 gap-x-4 sm:gap-x-8 lg:gap-x-4">
                        <button className="flex items-center w-full h-[37px] lg:w-[144px] lg:h-[41px] pr-12 sm:pr-20 pt-1 duration-300 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                            تایید
                        </button>
                        <button className="flex items-center w-full h-[37px] lg:w-[144px] lg:h-[41px] pr-9 sm:pr-[70px] pt-1 duration-300 border-2 border-[#28A745] hover:bg-[#28A745] hover:text-[#fff] text-base font-semibold text-[#28A745] rounded-[5px]">
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPersonalForm