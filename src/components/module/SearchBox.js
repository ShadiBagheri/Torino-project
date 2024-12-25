"use client";
//
// import { useEffect, useState } from "react";
// import { useGetTours } from "@/core/services/queries";
import { Controller, useForm } from "react-hook-form";
//Icons
import { GrLocation } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
// import { DateToIso, flattenObject } from "@/core/utils/helper";
// import { DatePicker } from "zaman";


function SearchBox() {
    // const [query, setQuery] = useState("");
    // const [show, setShow] = useState(false);
    // const { data, isPending, refetch } = useGetTours(query);
    const { register, handleSubmit, control } = useForm();
    //
    // useEffect(() => {
    //     refetch()
    // },[query]);
    //
    // const submitHandler = (form) => {
    //     setQuery(flattenObject(form))
    // }

    // const showHandler = () => setShow(true);

    return(
        <div className="flex items-center w-full my-2 mx-auto">
            <div className="flex w-[1270px] h-[100px] mx-auto">
                <div className="flex items-center justify-between w-[874px] h-[71px] mx-auto px-5 border-2 rounded-[20px]">
                    <form className="flex">
                        {/*onSubmit={submitHandler}*/}
                        <div className="flex flex-col">
                            <button className="flex items-center w-[225px] h-[51px] text-xl font-normal border-l">
                                <GrLocation className="-mt-2 ml-2 size-5"/>
                                مبدا
                            </button>
                                {/*<div className="flex w-[218px] h-[246px] mt-6 border rounded-lg bg-[#fff]">*/}
                                {/*    <ul className="flex flex-col w-full items-start">*/}
                                {/*        <li className="w-full h-[35px] pt-2 px-2 text-[13px] font-light text-[#282828] bg-[#F8F8F8]">پرتردد</li>*/}
                                {/*        <li className="flex w-full py-4 px-2 text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                                {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                                {/*            تهران*/}
                                {/*        </li>*/}
                                {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                                {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                                {/*            سنندج*/}
                                {/*        </li>*/}
                                {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                                {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                                {/*            تبریز*/}
                                {/*        </li>*/}
                                {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745] hover:rounded-b-lg">*/}
                                {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                                {/*            شیراز*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                        </div>
                        <div className="flex flex-col">
                            <button className="flex items-center w-[225px] h-[51px] mr-2 text-xl font-normal border-l">
                                <TbWorldSearch className="-mt-2 ml-2 size-5"/>
                                مقصد
                            </button>
                            {/*<div className="flex w-[218px] h-[246px] mt-6 border rounded-lg bg-[#fff]">*/}
                            {/*    <ul className="flex flex-col w-full items-start">*/}
                            {/*        <li className="w-full h-[35px] pt-2 px-2 text-[13px] font-light text-[#282828] bg-[#F8F8F8]">پرتردد</li>*/}
                            {/*        <li className="flex w-full py-4 px-2 text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                            {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                            {/*            تهران*/}
                            {/*        </li>*/}
                            {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                            {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                            {/*            سنندج*/}
                            {/*        </li>*/}
                            {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745]">*/}
                            {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                            {/*            تبریز*/}
                            {/*        </li>*/}
                            {/*        <li className="flex w-full py-4 px-2 border-t text-sm font-normal text-[#282828] hover:bg-[#28A745] hover:rounded-b-lg">*/}
                            {/*            <GrLocation className="ml-2 text-[#282828] size-5"/>*/}
                            {/*            شیراز*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                        <div className="flex w-[190px]">
                            <div className="flex items-center w-[190px] h-[51px] mr-2 text-xl font-normal">
                                <LuCalendarDays className="-mt-2 ml-2"/>
                                <p>تاریخ</p>
                            </div>
                            {/*<div>*/}
                            {/*    <Controller*/}
                            {/*        control={control}*/}
                            {/*        name="date"*/}
                            {/*        defaultValue="Date"*/}
                            {/*        render={({ field: { onChange } }) => (*/}
                            {/*            <DatePicker*/}
                            {/*                round="x2"*/}
                            {/*                accentColor="#28A745"*/}
                            {/*                onChange={(e) =>*/}
                            {/*                    onChange({*/}
                            {/*                        startDate: DateToIso(e.from),*/}
                            {/*                        endDate: DateToIso(e.to),*/}
                            {/*                    })*/}
                            {/*                }*/}
                            {/*                range*/}
                            {/*            />*/}
                            {/*        )}*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                        <button type="submit" className="w-[190px] h-[51px] bg-[#28A745] hover:bg-green-700 text-[#fff] text-2xl font-normal rounded-2xl ">جستجو</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox