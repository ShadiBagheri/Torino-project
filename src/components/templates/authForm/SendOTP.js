"use client";

import { useState } from "react";
//Services
import { useSendOtp } from "@/core/services/mutation";
//Utils
import { isValidateMobile } from "@/core/utils/validation";
//Icons
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";


function SendOTP(props) {
    const { setStep, mobile, setMobile, closeModal } = props;
    const [error, setError] = useState("");

    const { mutate, isPending } = useSendOtp();

    const submitHandler = (event) => {
        event.preventDefault();

        if (isPending) return;
        if (!isValidateMobile(mobile)) return setError("شماره معتبر وارد کنید!");
        setError("");

        mutate(
            { mobile },
            {
                onSuccess: (data) => {
                    console.log(data?.data?.code);
                    toast.success(data?.data?.message);
                    toast(data?.data?.code);
                    setStep(2);
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );
    };

    return(
        <div className="w-full h-full top-0 start-0 backdrop-blur-sm bg-black/20 fixed transition duration-700 ease-in-out">
            <div className="flex items-center w-[300px] h-[250px] sm:w-[410px] sm:h-[300px] md:w-[460px] md:h-[340px] lg:w-[510px] lg:h-[350px] xl:w-[561px] xl:h-[362px] my-[34%] sm:my-[17%] md:my-[11%] lg:my-[8%] xl:my-[12%] mx-auto p-5 bg-[#fff] rounded-[20px]">
                <div className="flex flex-col items-center w-full h-full mx-auto relative">
                    <IoClose onClick={closeModal} className="top-0 end-0 text-gray-600 size-4 sm:size-5 absolute cursor-pointer"/>
                    <h1 className="my-6 sm:my-8 md:my-9 mx-auto text-lg sm:text-xl md:text-2xl xl:text-[28px] font-semibold text-[#282828] tracking-wider">ورود به تورینو</h1>
                    <form onSubmit={submitHandler} className="flex flex-col items-center">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-col mb-7 md:mb-9 mx-auto text-start">
                                <label className="w-[200px] h-[25px] text-xs sm:text-sm md:text-base font-normal text-gray-600 sm:mb-2 md:mb-3 tracking-wide">شماره موبایل خود را وارد کنید</label>
                                <input className="w-[230px] h-[35px] sm:w-[340px] sm:h-[45px] md:w-[390px] md:h-[50px] lg:w-[430px] lg:h-[54px] xl:w-[491px] px-3 border-2 border-gray-300 bg-[#fff] text-gray-500 rounded-lg outline-0"
                                       type="text"
                                       placeholder="۰۹۱۲۳۳۳۲۳۲۳"
                                       value={mobile}
                                       onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            {!!error && <p className="-mt-7 mb-3 text-xs md:text-sm text-red-600">{error}</p>}
                        </div>
                        <button type="submit" disabled={isPending} className="w-[230px] h-[35px] sm:w-[340px] sm:h-[45px] md:w-[390px] md:h-[50px] lg:w-[430px] lg:h-[54px] xl:w-[491px] bg-[#28A745] text-sm sm:text-base font-semibold text-[#fff] rounded-lg tracking-wider hover:text-[#28A745] hover:bg-green-700 hover:text-[#fff]">
                            {!isPending ? "ارسال کد تایید" : "در حال ارسال"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendOTP