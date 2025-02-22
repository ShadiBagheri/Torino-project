"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//Hooks
import useQuery from "@/core/hooks/query";
//Queries
import { useGetTours } from "@/core/services/queries";
//Date
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { flattenObject } from "@/core/utils/helper";
//Icons
import { GrLocation } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import QueryString from "qs";
// import {DatePicker} from "zaman";
// //Date Picker
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import opacity from "react-element-popper/animations/opacity";
// import "react-multi-date-picker/styles/colors/green.css";




function SearchBox() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const { getQuery } = useQuery();

    const { data, isPending } = useGetTours();

    const { register, handleSubmit, control, reset } = useForm();

    useEffect(() => {
        const originId = getQuery("originId");
        const destinationId = getQuery("destinationId");
        if (originId && destinationId) reset({originId, destinationId})
        console.log({ originId, destinationId });
    }, []);

    const submitHandler = (form) => {
        const query = QueryString.stringify(flattenObject(form));
        router.push(`/?${query}`);
    };

    return(
        <div className="flex w-full mt-2 mb-24 px-10 bg-red-100">
            <div className="container flex items-center justify-between h-full lg:w-[1270px] lg:h-[72px] mx-auto px-10 lg:px-0 bg-yellow-200">
                <div className="flex items-center justify-between w-full h-full lg:w-[700px] xl:w-[874px] lg:h-[71px] mx-auto lg:border-2 lg:rounded-[20px] relative bg-blue-100">
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="container flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex flex-col lg:flex-row items-center w-[390px]">
                                <div className="flex w-full">
                                    <div className="flex w-full lg:w-[155px] xl:w-[210px] px-3 lg:px-0 lg:mr-2 rounded-xl border-2 lg:border-0 lg:border-l">
                                        <GrLocation className="mt-2 text-gray-600 lg:text-[#282828] size-5 lg:size-6"/>
                                        <select {...register("originId")} className="flex items-center w-full lg:w-[210px] h-[51px] mr-1 xl:mr-2 xl:pl-5 text-xl font-normal bg-[#fff] border-0 outline-0 appearance-none text-gray-600 lg:text-[#282828]">
                                            <option value="" className="rounded-lg bg-white">مبدا</option>
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
                                    {/*w-[107px] sm:w-[222px] md:w-[296px]*/}
                                    <div className="flex w-full lg:w-[155px] xl:w-[210px] mr-4 px-3 lg:px-0 lg:mr-2 rounded-xl border-2 lg:border-0 lg:border-l">
                                        <TbWorldSearch className="mt-2 xl:mt-1 text-gray-600 lg:text-[#282828] size-5 lg:size-6 xl:size-7"/>
                                        <select {...register("destinationId")} className="flex items-center w-full lg:w-[210px] h-[51px] mr-1 xl:mr-2 xl:pl-5 text-xl font-normal bg-[#fff] border-0 outline-0 appearance-none text-gray-600 lg:text-[#282828]">
                                            <option value="" className="rounded-lg bg-white">مقصد</option>
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
                                </div>
                                <div className="flex w-full mt-5 lg:mt-0 lg:w-[150px] xl:w-[220px] h-[51px] px-3 lg:px-0 border-2 lg:border-0 rounded-xl relative">
                                    <div className="flex mt-3 lg:mr-2">
                                        <LuCalendarDays className="text-gray-600 lg:text-[#282828] size-4 xl:size-5"/>
                                        <h2 className="mr-2 text-xl text-gray-600 lg:text-[#282828]">تاریخ</h2>
                                    </div>
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field: { onChange } }) => (
                                            <DatePicker
                                                round="x2"
                                                accentColor="#28A745"
                                                inputClass=" w-full lg:w-[110px] xl:w-[150px] outline-0"
                                                onChange={(e) =>
                                                    onChange({startDate: e.from, endDate: e.to}
                                                    )}
                                                range
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="mt-8 lg:mt-0 lg:mr-9 xl:mr-4 w-full lg:w-[175px] xl:w-[190px] h-[51px] bg-[#28A745] hover:bg-green-700 text-[#fff] text-2xl font-normal rounded-2xl">
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
