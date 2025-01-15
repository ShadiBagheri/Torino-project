"use client";

import {useState} from "react";
//Date
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { DateToIso, flattenObject } from "@/core/utils/helper";
//Icons
import { GrLocation } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";


function SearchBox({ data }) {
    const { id, origin, destination, name } = data;
    const [query, setQuery] = useState("");
    const { register, handleSubmit, control, reset } = useForm();


    const changeHandler = (event) => {
        const value = event.target.value;
        console.log(value)

        // if (value === )
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return(
        <div className="flex w-full mt-2 mb-24">
            <div className="flex items-center justify-between w-[1270px] h-[72px] mx-auto">
                <div className="flex items-center justify-between w-[874px] h-[71px] mx-auto border-2 rounded-[20px] relative bg-[#fff]">
                    <form onSubmit={submitHandler}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex w-[210px] mt-2 mr-2 border-l">
                                    <GrLocation className="mt-2 text-[#282828] size-6"/>
                                    <select onChange={changeHandler} value={origin} className="flex items-center w-[210px] h-[51px] mr-2 pl-5 text-xl font-normal bg-[#fff]  border-0 outline-0 appearance-none">
                                        <option value="" className="rounded-lg bg-white">مبدا</option>
                                        <option value={origin} className="text-[13px] bg-[#F8F8F8] rounded-2xl">پرتردد</option>
                                        {/*{data?.map(city => (*/}
                                        {/*    <option key={city.id} className="text-black text-sm">{city.origin.name}</option>*/}
                                        {/*))}*/}
                                        {/*for(let origin in data) {*/}
                                        {/*console.log(origin)*/}
                                        {/*}*/}
                                    </select>
                                </div>
                                <div className="flex w-[210px] mt-2 mr-2 border-l">
                                    <TbWorldSearch className="mt-1 text-[#282828] size-7"/>
                                    <select className="flex items-center w-[210px] h-[51px] mr-2 pl-5 text-xl font-normal bg-[#fff] border-0 outline-0 appearance-none">
                                        <option value="" className="rounded-lg">مقصد</option>
                                        <option value="1" className="text-[13px] bg-[#F8F8F8] rounded-2xl">پرتردد</option>
                                        <option value="2" className="text-sm">تهران</option>
                                        <option value="3" className="text-sm">سنندج</option>
                                        <option value="4" className="text-sm">اصفهان</option>
                                        <option value="5" className="text-sm">سلیمانیه</option>
                                        <option value="6" className="text-sm">ایتالیا</option>
                                        <option value="7" className="text-sm">هولر</option>
                                        <option value="8" className="text-sm">آفرود</option>
                                        <option value="9" className="text-sm">مازندران</option>
                                    </select>
                                </div>
                                <div className="flex w-[235px]">
                                    <div className="flex mt-2 mr-2">
                                        <LuCalendarDays className=" text-[#282828] size-5"/>
                                        <h2 className="mr-2 text-xl">تاریخ</h2>
                                    </div>
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field: { onChange } }) => (
                                            <DatePicker
                                                round="x2"
                                                accentColor="#28A745"
                                                onChange={(e) =>
                                                    onChange({
                                                        startDate: DateToIso(e.from),
                                                        endDate: DateToIso(e.to),
                                                    })
                                                }
                                                range
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-[190px] h-[51px] bg-[#28A745] hover:bg-green-700 text-[#fff] text-2xl font-normal rounded-2xl">
                                جستجو
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
