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
        <div className="container flex flex-col w-full h-[251px] mx-auto py-4 px-5 md:px-10 lg:py-4 lg:px-0 lg:w-[750px] lg:h-[180px] xl:w-[950px] xl:h-[260px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات شخصی</h1>
            <form className="w-full mt-4">
                <div className="flex flex-wrap px-3.5 gap-x-12 gap-y-5">
                    <div className="w-[280px] h-[45px] px-3 relative">
                       <input type="text" id="full_name"
                       className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                       placeholder=" "
                       />
                       <label htmlFor="full_name"
                       className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            نام و نام خانوادگی
                        </label>
                    </div>
                    <div className="w-[280px] h-[45px] px-3 relative">
                        <input type="number" id="code"
                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                               placeholder=" "
                        />
                        <label htmlFor="code"
                               className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            کد ملی
                        </label>
                    </div>
                    <div id="date" className="peer relative flex items-center w-[255px] h-[47px] px-4 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
                        <IoCalendarOutline className="ml-1 text-gray-500"/>
                        <DatePicker
                            name="birthDate"
                            calendar={persian}
                            locale={persian_fa}
                            className="green"
                            animations={[opacity()]}
                            placeholder="تاریخ تولد"
                            // value={form.birthDate}
                            // onChange={dateChangeHandler}
                            style={{
                                width: "100%",
                                marginTop: "5px",
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                                color: "gray",
                            }}
                        />
                    </div>
                    <div className="w-[280px] h-[45px] px-3 relative">
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
                <div className="flex items-center w-full border-t-2 px-3 my-5">
                    <div className="flex mt-3 mr-[607px] gap-x-4">
                        <button className="flex items-center w-[144px] h-[41px] pr-14 pt-1 duration-300 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                            تایید
                        </button>
                        <button className="flex items-center w-[144px] h-[41px] pr-12 pt-1 duration-300 border-2 border-[#28A745] hover:bg-[#28A745] hover:text-[#fff] text-base font-semibold text-[#28A745] rounded-[5px]">
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPersonalForm