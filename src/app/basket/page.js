"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
//Services
import { useCheckout } from "@/core/services/mutation";
//Queries
import { useGetBasket } from "@/core/services/queries";
//Utils
import { e2p, sp } from "@/core/utils/numbers";
//Date Picker
import { IoCalendarOutline } from "react-icons/io5";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css";
//Toastify
import { toast } from "react-toastify";

function BasketPage() {
    const [ form, setForm ] = useState({
        fullName: "",
        gender: "",
        birthDate: "",
        nationalCode: "",
    });
    const [error, setError] = useState({
        fullName: "",
        code: "",
        gender: "",
        birthDate: "",
    })
    const router = useRouter();
    const { mutate } = useCheckout();
    const { data, isPending } = useGetBasket();


    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(form => ({...form ,[name] : value}));
        setError(error => ({...error, [name]: ""}));
    }

    const dateChangeHandler = (value) => {
        setForm(form => ({...form, birthDate: value.format("YYYY/MM/DD")}));
    }

    const { fullName, nationalCode, gender, birthDate } = form;

    const basketFormValidation = () => {
        let error = {};

        if (!fullName.trim()) {
            error.fullName = "لطفا نام و نام خانوادگی را وارد کنید!";
        }
        if (!gender) {
            error.gender = "لطفا جنسیت را وارد کنید!";
        }
        if (!birthDate) {
            error.birthDate = "لطفا تاریخ تولد را وارد کنید!";
        }
        if (nationalCode.length < 10) {
            error.nationalCode = "کد ملی صحیح نمی باشد!";
        }
        return error;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const validationErrors = basketFormValidation();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        if (isPending) {
            toast.info("در حال پردازش...");
            return;
        }

        mutate(form ,{
            onSuccess: (data) => {
                console.log(data?.data);
                toast.success(data?.data?.message);
                router.push("/payment?status=success");
            },
            onError: (error) => {
                console.log(error)
            }
        })
    };

    if (!data || !data.data) {
        return (
            <div>
                <h1>توری یافت نشد!</h1>
                <Link href="/">
                    برو به صفحه اصلی
                </Link>
            </div>
        )
    }

    return(
        <div className="flex w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
            <div className="container flex items-center justify-between w-full h-full lg:w-[1270px] lg:h-[240px] xl:h-[250px] my-10 mx-auto">
                <form onSubmit={submitHandler} className="flex flex-col lg:flex-row w-full mx-auto gap-y-6 lg:gap-y-0 lg:gap-x-6">
                    <div className="container flex flex-col w-full h-[390px] md:h-[235px] lg:w-[920px] lg:h-[240px] xl:h-[250px] mx-auto p-5 border-2 rounded-[10px] bg-[#fff]">
                        <div className="flex gap-3">
                            <Image className="w-6 h-6" src="/images/basket.png" alt="basket" width={24} height={24}/>
                            <h1 className="text-2xl font-normal text-[#282828] tracking-wide">مشخصات مسافر</h1>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-x-5 gap-y-2">
                            <div className="flex flex-col h-[70px]">
                                <div className="w-full h-[40px] md:h-[45px] lg:w-[205px] lg:h-[55px] xl:w-[280px] px-2 relative">
                                    <input type="text" id="full_name" name="fullName"
                                           className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                           placeholder=" "
                                           value={form.fullName}
                                           onChange={changeHandler}
                                    />
                                    <label htmlFor="full_name"
                                           className="mr-2 -mt-0.5 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                        نام و نام خانوادگی
                                    </label>
                                </div>
                                {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}
                            </div>
                            <div className="flex flex-col h-[70px]">
                                <div className="w-full h-[40px] md:h-[45px] lg:w-[205px] lg:h-[55px] xl:w-[280px] px-2 relative">
                                    <input type="number" id="nationalCode" name="nationalCode"
                                           className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                           placeholder=" "
                                           value={form.nationalCode}
                                           onChange={changeHandler}
                                    />
                                    <label htmlFor="nationalCode"
                                           className="mr-2 -mt-0.5 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                        کد ملی
                                    </label>
                                </div>
                                {!!error?.nationalCode && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.nationalCode}</p>)}
                            </div>
                            <div className="flex flex-col h-[70px]">
                                <div id="date" className="peer relative flex items-center w-full h-[50px] lg:mt-0 md:h-[47px] lg:w-[205px] lg:h-[48px] xl:w-[280px]  px-4 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
                                    <IoCalendarOutline className="ml-1 text-gray-500"/>
                                    <DatePicker
                                        name="birthDate"
                                        calendar={persian}
                                        calendarPosition="bottom-start"
                                        locale={persian_fa}
                                        className="green"
                                        animations={[opacity()]}
                                        placeholder="تاریخ تولد"
                                        value={form.birthDate}
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
                                <div className="w-full h-[40px] md:h-[45px] lg:w-[205px] lg:h-[50px] xl:w-[280px] px-2 relative">
                                    <select name="gender" onChange={changeHandler} className="-mr-2 absolute flex px-3 pb-2 pt-3 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 focus:outline-none focus:border-gray-400 peer">
                                        <option value="">جنسیت</option>
                                        <option value="مرد">مرد</option>
                                        <option value="زن">زن</option>
                                    </select>
                                </div>
                                {!!error?.gender && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.gender}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-[220px] sm:h-[160px] md:h-[180px] lg:w-[315px] lg:h-[240px] xl:w-[325px] xl:h-[250px] py-5 rounded-[10px] border-2 bg-[#fff]">
                        <div className="flex items-center justify-between mb-5 mx-5">
                            <h1 className="sm:text-2xl md:text-3xl lg:text-2xl font-normal">{data.data.title}</h1>
                            <h1 className="sm:text-lg  md:text-xl lg:text-base font-normal text-gray-600">{e2p(data.data.time)}</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between lg:flex-col px-5 border-t-2 border-dashed border-gray-700">
                            <div className="flex items-center justify-between gap-x-24 sm:gap-x-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16 py-7">
                                <h2 className="sm:text-xl md:text-2xl lg:text-sm xl:text-base font-normal">قیمت نهایی</h2>
                                <h2 className="flex mt-1.5 xl:mt-0 sm:text-xl md:text-2xl lg:text-lg xl:text-[28px] font-normal text-blue-600 gap-x-2">{sp(data.data.price)}
                                    <p className="mt-0.5 md:mt-1 xl:mt-1 sm:text-base md:text-lg lg:text-sm xl:text-base font-normal text-[#282828]">تومان</p>
                                </h2>
                            </div>
                            <button type="submit" className="mx-5 sm:mx-0 lg:px-0 w-full h-[50px] sm:w-[160px] sm:h-[45px] md:w-[190px] md:h-[55px] lg:w-full lg:h-[55px] xl:h-[60px]  md:text-xl xl:text-2xl font-normal rounded-[10px] text-[#fff] bg-[#28A745] hover:bg-green-700">
                                ثبت و خرید نهایی
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     )
}

export default BasketPage