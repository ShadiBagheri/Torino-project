"use client";
import { useEffect, useState } from "react";
//Services
import { useEditPersonalInfo } from "@/core/services/mutation";
//Utils
import { p2e } from "@/core/utils/numbers";
//Icons
import { IoCalendarOutline } from "react-icons/io5";
//Date Picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css";
//Toastify
import { toast } from "react-toastify";


function EditPersonalForm({ isPersonalOpen, setIsPersonalOpen, personalForm, setPersonalForm }) {
    const [error, setError] = useState({
        fullName: "",
        gender: "",
        birthDate: "",
        nationalCode: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setPersonalForm(personalForm => ({...personalForm, [name]: value}));
        setError(error => ({...error, [name]: ""}));
    }
    const dateChangeHandler = (value) => {
        setPersonalForm(personalForm => ({...personalForm, birthDate: value.format("YYYY/MM/DD")}));
    }
    const { mutate, isPending } = useEditPersonalInfo();
    const { fullName, gender, birthDate, nationalCode } = personalForm;

    useEffect(() => {
        if (personalForm){
            setPersonalForm({
                fullName: personalForm?.fullName,
                gender: personalForm?.gender,
                birthDate: personalForm?.birthDate,
                nationalCode: personalForm?.nationalCode,
            })
        }
    }, []);

    const personalFormValidation = () => {
        let error = {};
        if (!fullName.trim()) {
            error.fullName = "لطفا نام و نام خانوادگی را وارد کنید!";
        }
        if (!gender) {
            error.gender = "لطفا جنسیت را وارد کنید!";
        }
        if (!birthDate.length) {
            error.birthDate = "لطفا تاریخ تولد را وارد کنید!";
        }
        if (nationalCode.length < 10) {
            error.nationalCode = "کد ملی صحیح نمی باشد!";
        }
        return error;
    }

    const personalFormHandler = (event) => {
        event.preventDefault();
        const newErrors = personalFormValidation(personalForm);
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }
        console.log("event")
        if (isPending) return;
        mutate(
            { personalForm },
            {
                onSuccess: (data) => {
                    console.log(data?.data)
                    toast.success(data?.data?.message);
                    setIsPersonalOpen(!isPersonalOpen);
                    console.log(personalForm)
                },
                onError: (error) => {
                    console.log(error)
                },
            }
        );
    }
    const cancelBankFormHandler = () =>  setIsPersonalOpen(!isPersonalOpen);

    return(
        <div className="container flex flex-col h-[435px] mx-auto py-6 px-5 md:h-[305px] md:px-10 lg:py-4 lg:px-0 lg:w-[750px] lg:h-[300px] xl:w-[950px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">ویرایش اطلاعات شخصی</h1>
            <form onSubmit={personalFormHandler} className="flex flex-col w-full my-5">
                <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-between lg:grid-cols-3 lg:pr-3 lg:pl-4 gap-y-2 md:gap-x-10 md:gap-y-3 lg:gap-x-5 lg:gap-y-3">
                    <div className="flex flex-col h-[70px]">
                        <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <input type="text" id="full_name" name="fullName"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   value={personalForm.fullName}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="full_name"
                                   className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                نام و نام خانوادگی
                            </label>
                        </div>
                        {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}
                    </div>
                    <div className="flex flex-col h-[70px]">
                        <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <input type="number" id="nationalCode" name="nationalCode"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   value={p2e(personalForm.nationalCode)}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="nationalCode"
                                   className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                کد ملی
                            </label>
                        </div>
                        {!!error?.nationalCode && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.nationalCode}</p>)}
                    </div>
                    <div className="flex flex-col h-[70px]">
                        <div id="date" className="peer relative flex items-center w-full h-[50px] md:-mt-1 lg:mt-0 md:w-[298px] md:h-[48px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[47px] px-4 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
                            <IoCalendarOutline className="ml-1 text-gray-500"/>
                            <DatePicker
                                name="birthDate"
                                calendar={persian}
                                calendarPosition="bottom-start"
                                locale={persian_fa}
                                className="green"
                                animations={[opacity()]}
                                placeholder="تاریخ تولد"
                                value={personalForm.birthDate}
                                onChange={dateChangeHandler}
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
                        {!!error?.birthDate && (<p className="mt-2 text-red-700 font-medium text-xs z-10">{error?.birthDate}</p>)}
                    </div>
                    <div className="flex flex-col h-[70px]">
                        <div className="w-full h-[40px] mt-1 md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <select id="gender" name="gender" onChange={changeHandler} className="-mr-2 absolute flex px-3 pb-2 pt-3 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 focus:outline-none focus:border-gray-400 peer">
                                <option value="">جنسیت</option>
                                <option value="مرد">مرد</option>
                                <option value="زن">زن</option>
                            </select>
                            <label htmlFor="gender"
                                   className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                جنسیت
                            </label>
                        </div>
                        {!!error?.gender && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.gender}</p>)}
                    </div>
                </div>
                <div className="container flex items-center w-full -mt-1 md:border-t-2 md:mt-2 lg:my-2 lg:px-6">
                    <div className="flex items-center justify-between md:items-end md:justify-end w-full mt-3 gap-x-4 sm:gap-x-8 md:gap-x-4">
                        <button type="submit" className="flex items-center w-full h-[37px] md:w-[120px] md:h-[45px] lg:w-[144px] lg:h-[46px] pr-12 sm:pr-20 md:pr-11 lg:pr-14 pt-1 duration-300 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                            تایید
                        </button>
                        <button type="button" onClick={cancelBankFormHandler} className="flex items-center w-full h-[37px] md:w-[120px] md:h-[45px] lg:w-[144px] lg:h-[46px] pr-9 sm:pr-[70px] md:pr-10 lg:pr-12 pt-1 duration-300 border-2 border-[#28A745] hover:bg-[#28A745] hover:text-[#fff] text-base font-semibold text-[#28A745] rounded-[5px]">
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPersonalForm