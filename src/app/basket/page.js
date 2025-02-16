"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";
//Services
import { useCheckout } from "@/core/services/mutation";
//Date Picker
import { IoCalendarOutline } from "react-icons/io5";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css";
//Toastify
import { toast } from "react-toastify";
import Image from "next/image";

function BasketPage(props) {
    const {id, title, image, price ,options, fleetVehicle} = props;


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
    // const router = useRouter();

    const { mutate } = useCheckout();

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
        if (!birthDate.length) {
            error.birthDate = "لطفا تاریخ تولد را وارد کنید!";
        }
        if (nationalCode.length < 10) {
            error.nationalCode = "کد ملی صحیح نمی باشد!";
        }
        return error;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const validationErrors = basketFormValidation(form);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        mutate({ form },{
            onSuccess: (data) => {
                console.log(data?.data);
                toast.success(data?.data?.message);
                // router.push("/checkoutpage");
            },
            onError: (error) => {
                console.log(error?.response.data?.message);
            }
        });
    };

    return(
        <div className="flex w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
            <div className="container flex items-center justify-between w-[1270px] h-[250px] my-10 mx-auto bg-blue-300">
                <form onSubmit={submitHandler} className="flex w-full mx-auto gap-x-6">
                    <div className="flex flex-col w-[920px] h-[250px] mx-auto border-2 rounded-[10px] bg-[#fff]">
                        <div className="flex">
                            <Image className="w-5 h-5" src="/images/basket.png" alt="basket" width={24} height={24}/>
                            <h1 className="lg:px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">مشخصات مسافر</h1>
                        </div>
                            <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-between lg:grid-cols-3 lg:pr-3 lg:pl-4 gap-y-2 md:gap-x-10 md:gap-y-3 lg:gap-x-5 lg:gap-y-3">
                                <div className="flex flex-col h-[70px]">
                                    <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                                        <input type="text" id="full_name" name="fullName"
                                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                               placeholder=" "
                                               value={form.fullName}
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
                                               value={form.nationalCode}
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
                    </div>
                    <div className="flex flex-col w-[325px] h-[250px] py-5 rounded-[10px] border-2 bg-[#fff]">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-5 mx-5">
                                <h1 className="text-2xl font-normal">تایتل</h1>
                                <h1 className="text-base font-normal text-gray-600">4 روز و شب</h1>
                            </div>
                            <div className="flex items-center justify-between border-t-2 border-dashed border-gray-700 py-6 px-5">
                                <h2 className="text-base font-normal">قیمت نهایی</h2>
                                <h2 className="flex text-[28px] font-normal text-blue-600 gap-x-2">1700000
                                    <p className="mt-2.5 text-base font-normal text-[#282828]">تومان</p>
                                </h2>
                            </div>
                        </div>
                        <button type="submit" className="w-[290px] h-[60px] mx-auto text-2xl font-normal rounded-[10px] text-[#fff] bg-[#28A745] hover:bg-green-700">
                            ثبت و خرید نهایی
                        </button>
                    </div>
                </form>

                {/*<form onSubmit={submitHandler} className="flex flex-col w-full my-5">*/}
            {/*    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-between lg:grid-cols-3 lg:pr-3 lg:pl-4 gap-y-2 md:gap-x-10 md:gap-y-3 lg:gap-x-5 lg:gap-y-3">*/}
            {/*        <div className="flex flex-col h-[70px]">*/}
            {/*            <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">*/}
            {/*                <input type="text" id="full_name" name="fullName"*/}
            {/*                       className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"*/}
            {/*                       placeholder=" "*/}
            {/*                       value={form.fullName}*/}
            {/*                       onChange={changeHandler}*/}
            {/*                />*/}
            {/*                <label htmlFor="full_name"*/}
            {/*                       className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">*/}
            {/*                    نام و نام خانوادگی*/}
            {/*                </label>*/}
            {/*            </div>*/}
            {/*            {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col h-[70px]">*/}
            {/*            <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">*/}
            {/*                <input type="number" id="nationalCode" name="nationalCode"*/}
            {/*                       className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"*/}
            {/*                       placeholder=" "*/}
            {/*                       value={form.nationalCode}*/}
            {/*                       onChange={changeHandler}*/}
            {/*                />*/}
            {/*                <label htmlFor="nationalCode"*/}
            {/*                       className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">*/}
            {/*                    کد ملی*/}
            {/*                </label>*/}
            {/*            </div>*/}
            {/*            {!!error?.nationalCode && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.nationalCode}</p>)}*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col h-[70px]">*/}
            {/*            <div id="date" className="peer relative flex items-center w-full h-[50px] md:-mt-1 lg:mt-0 md:w-[298px] md:h-[48px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[47px] px-4 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">*/}
            {/*                <IoCalendarOutline className="ml-1 text-gray-500"/>*/}
            {/*                <DatePicker*/}
            {/*                    name="birthDate"*/}
            {/*                    calendar={persian}*/}
            {/*                    calendarPosition="bottom-start"*/}
            {/*                    locale={persian_fa}*/}
            {/*                    className="green"*/}
            {/*                    animations={[opacity()]}*/}
            {/*                    placeholder="تاریخ تولد"*/}
            {/*                    value={form.birthDate}*/}
            {/*                    onChange={dateChangeHandler}*/}
            {/*                    style={{*/}
            {/*                        width: "100%",*/}
            {/*                        marginTop: "5px",*/}
            {/*                        alignItems: "start",*/}
            {/*                        border: "none",*/}
            {/*                        outline: "none",*/}
            {/*                        boxShadow: "none",*/}
            {/*                        color: "gray",*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            {!!error?.birthDate && (<p className="mt-2 text-red-700 font-medium text-xs z-10">{error?.birthDate}</p>)}*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col h-[70px]">*/}
            {/*            <div className="w-full h-[40px] mt-1 md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">*/}
            {/*                <select id="gender" name="gender" onChange={changeHandler} className="-mr-2 absolute flex px-3 pb-2 pt-3 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 focus:outline-none focus:border-gray-400 peer">*/}
            {/*                    <option value="">جنسیت</option>*/}
            {/*                    <option value="مرد">مرد</option>*/}
            {/*                    <option value="زن">زن</option>*/}
            {/*                </select>*/}
            {/*                <label htmlFor="gender"*/}
            {/*                       className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">*/}
            {/*                    جنسیت*/}
            {/*                </label>*/}
            {/*            </div>*/}
            {/*            {!!error?.gender && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.gender}</p>)}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </div>
        </div>

    )
    //
    // return(
    //     <div className="container flex w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
    //         <div className="flex items-center justify-between w-[1270px] h-[250px] my-10 mx-auto bg-blue-300">
    //             <form onSubmit={submitHandler} className="flex gap-6 bg-fuchsia-300">
    //                 {/*First Section*/}
    //                 <div className="flex items-center mx-auto p-5 lg:w-[910px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
    //                     <div className="flex flex-col pt-5 bg-green-500">
    //                         <div className="flex">
    //                             <Image className="w-[24px] h-[24px] rounded-xl" src="/images/profile5.png" width={25} height={25} alt="img"/>
    //                             <h1 className="mr-2 text-2xl font-normal">مشخصات مسافر</h1>
    //                         </div>
    //                         <div className="flex flex-wrap mt-4 gap-x-4">
    //                             <div className="flex flex-col h-[80px]">
    //                                 <input className="w-[278px] h-[52px] px-2 border-2 border-gray-400 placeholder-gray-500 rounded-[5px] text-sm font-normal text-gray-600 outline-none" type="text" placeholder="نام و نام خانوادگی" name="fullName" value={form.fullName} onChange={changeHandler}/>
    //                                 {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}
    //
    //                             </div>
    //                             <div className="flex flex-col h-[80px]">
    //                                 <input className="w-[278px] h-[52px] px-2 border-2 border-gray-400  placeholder-gray-500 rounded-[5px] text-sm font-normal text-gray-600 outline-none" type="number" placeholder="کدملی" name="code" value={form.code} onChange={changeHandler}/>
    //                                 {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}
    //                             </div>
    //                             <div className="flex flex-col h-[80px]">
    //                                 <div className="flex items-center w-[278px] h-[52px] px-2 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
    //                                     <IoCalendarOutline className=" ml-1 text-gray-500"/>
    //                                     <DatePicker
    //                                         name="birthDate"
    //                                         calendar={persian}
    //                                         locale={persian_fa}
    //                                         className="green"
    //                                         animations={[opacity()]}
    //                                         placeholder="تاریخ تولد"
    //                                         value={form.birthDate}
    //                                         onChange={dateChangeHandler}
    //                                         style={{
    //                                             marginTop: "8px",
    //                                             border: "none",
    //                                             outline: "none",
    //                                             boxShadow: "none",
    //                                             color: "gray",
    //                                         }}
    //                                     />
    //                                 </div>
    //                                 {!!error?.fullName && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.fullName}</p>)}
    //                             </div>
    //                             <div className="flex flex-col  h-[80px]">
    //                                 <select className="w-[278px] h-[52px] px-1 border-2 border-gray-400 rounded-[5px] text-sm font-normal text-gray-500 outline-none" name="gender" onChange={changeHandler}>
    //                                     <option value="" selected>جنسیت</option>
    //                                     <option value="female">زن</option>
    //                                     <option value="male">مرد</option>
    //                                 </select>
    //                                 {error.gender && <p className="mt-1 text-xs text-red-600">{error.gender}</p>}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {/*Second section*/}
    //                 <div className="flex mx-auto lg:w-[335px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
    //                     <button type="submit" className="bg-[#28A745]">
    //                         ثبت و خرید نهایی
    //                     </button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default BasketPage