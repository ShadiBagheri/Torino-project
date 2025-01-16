"use client";
import { useState } from "react";

import Image from "next/image";
//Icons
import { IoCalendarOutline } from "react-icons/io5";
//Date Picker
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import opacity from "react-element-popper/animations/opacity";
import Link from "next/link";



function CheckOutPage() {
    const [ form, setForm ] = useState({
        userName: "",
        code: "",
        gender: "",
        birthDate: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(form => ({...form ,[name] : value}));
        console.log(value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return(
        <div className="container flex w-full h-full mx-auto lg:h-screen px-10 lg:bg-[#F3F3F3]">
            <div className="flex items-center justify-between w-[1270px] h-[250px] my-10 mx-auto bg-blue-300">
                <form onSubmit={submitHandler} className="flex gap-6">
                    {/*First Section*/}
                    <div className="flex mx-auto p-5 lg:w-[910px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
                        <div>
                            <div className="flex">
                                <Image className="w-[24px] h-[24px] rounded-xl" src="/images/profile5.png" width={25} height={25} alt="img"/>
                                <h1 className="mr-2 text-2xl font-normal">مشخصات مسافر</h1>
                            </div>
                            <div className="flex flex-wrap">
                                <input className="border" type="text" placeholder="نام و نام خانوادگی" name="userName" value={form.userName} onChange={changeHandler}/>
                                <input className="border" type="number" placeholder="کدملی" name="code" value={form.code} onChange={changeHandler}/>
                                <div className="flex">
                                    <IoCalendarOutline/>
                                    <DatePicker
                                        calendar={persian}
                                        locale={persian_fa}
                                        className="green"
                                        animations={[opacity()]}
                                        render={
                                            <input className="border" name="birthDate"
                                                   value={form.birthDate}
                                                   onChange={changeHandler}
                                                   placeholder="تاریخ تولد"
                                            />
                                        }
                                    />
                                </div>
                                <select className="border" onChange={changeHandler}>
                                    <option value="">جنسیت</option>
                                    <option value="female" name="gender">زن</option>
                                    <option value="male" name="gender">مرد</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*Second section*/}
                    <div className="flex mx-auto lg:w-[335px] lg:h-[250px] lg:bg-[#fff] lg:border rounded-[10px]">
                        <button type="submit">
                            {/*<Link>ثبت و خرید نهایی</Link>*/}
                            ثبت و خرید نهایی
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckOutPage