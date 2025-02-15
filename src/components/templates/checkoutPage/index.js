"use client";
import { useState } from "react";
import { useCheckout } from "@/core/services/mutation";
import { useRouter } from "next/navigation";
import { useGetBasket } from "@/core/services/queries";

import Image from "next/image";
//Icons
import { IoCalendarOutline } from "react-icons/io5";
//Date Picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import opacity from "react-element-popper/animations/opacity";

function CheckoutPage() {
    const router = useRouter();
    const [ form, setForm ] = useState({
        fullName: "",
        code: "",
        gender: "",
        birthDate: "",
    });
    const [error, setError] = useState({
        fullName: "",
        code: "",
        gender: "",
        birthDate: "",
    })
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

    const { fullName, code, gender, birthDate } = form;

    const isValidateForm = () => {
        let error = {};

        if (!fullName.trim()) error.fullName = "لطفا نام و نام خانوادگی را وارد کنید!";
        if (!code.length > 10 || code.length === "") error.code = " کدملی نامعتبر است!";
        if (!gender) error.gender = "لطفا جنسیت را وارد کنید!";
        if (!birthDate) error.birthDate = "لطفا تاریخ تولد را وارد کنید!";

        console.log(error);
        return error;
    }

    const restForm = () => {
        setForm({ fullName: "", code: "", gender: "", birthDate: "" });
        setError({ fullName: "", code: "", gender: "", birthDate: "" });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const validationErrors = isValidateForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
        restForm();

        mutate({ form },{
            onSuccess: (data) => {
                console.log(data);
                router.push("/");
            },
            onError: (error) => {
                console.log(error?.response.data?.message);
            }
        });
    };

    return(
        <div className="container flex w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
            <div className="flex items-center justify-between w-[1270px] h-[250px] my-10 mx-auto bg-blue-300">
                <form onSubmit={submitHandler} className="flex gap-6 bg-fuchsia-300">
                    {/*First Section*/}
                    <div className="flex items-center mx-auto p-5 lg:w-[910px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
                        <div className="flex flex-col pt-5 bg-green-500">
                            <div className="flex">
                                <Image className="w-[24px] h-[24px] rounded-xl" src="/images/profile5.png" width={25} height={25} alt="img"/>
                                <h1 className="mr-2 text-2xl font-normal">مشخصات مسافر</h1>
                            </div>
                            <div className="flex flex-wrap mt-4 gap-x-4">
                                <div className="flex flex-col h-[80px]">
                                    <input className="w-[278px] h-[52px] px-2 border-2 border-gray-400 placeholder-gray-500 rounded-[5px] text-sm font-normal text-gray-600 outline-none" type="text" placeholder="نام و نام خانوادگی" name="fullName" value={form.fullName} onChange={changeHandler}/>
                                    {error.fullName && <p className="mt-1 text-xs text-red-600">{error.fullName}</p>}
                                </div>
                                <div className="flex flex-col h-[80px]">
                                    <input className="w-[278px] h-[52px] px-2 border-2 border-gray-400  placeholder-gray-500 rounded-[5px] text-sm font-normal text-gray-600 outline-none" type="number" placeholder="کدملی" name="code" value={form.code} onChange={changeHandler}/>
                                    {error.code && <p className="mt-1 text-xs text-red-600">{error.code}</p>}
                                </div>
                                <div className="flex flex-col h-[80px]">
                                    <div className="flex items-center w-[278px] h-[52px] px-2 border-2 border-gray-400 bg-[#fff] rounded-[5px] text-sm font-normal text-gray-600">
                                        <IoCalendarOutline className=" ml-1 text-gray-500"/>
                                        <DatePicker
                                            name="birthDate"
                                            calendar={persian}
                                            locale={persian_fa}
                                            className="green"
                                            animations={[opacity()]}
                                            placeholder="تاریخ تولد"
                                            value={form.birthDate}
                                            onChange={dateChangeHandler}
                                            style={{
                                                marginTop: "8px",
                                                border: "none",
                                                outline: "none",
                                                boxShadow: "none",
                                                color: "gray",
                                            }}
                                        />
                                    </div>
                                    {error.birthDate && <p className="mt-1 text-xs text-red-600">{error.birthDate}</p>}
                                </div>
                                <div className="flex flex-col  h-[80px]">
                                    <select className="w-[278px] h-[52px] px-1 border-2 border-gray-400 rounded-[5px] text-sm font-normal text-gray-500 outline-none" name="gender" onChange={changeHandler}>
                                        <option value="" selected>جنسیت</option>
                                        <option value="female">زن</option>
                                        <option value="male">مرد</option>
                                    </select>
                                    {error.gender && <p className="mt-1 text-xs text-red-600">{error.gender}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Second section*/}
                    <div className="flex mx-auto lg:w-[335px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
                        <button type="submit" className="bg-[#28A745]">
                            ثبت و خرید نهایی
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutPage