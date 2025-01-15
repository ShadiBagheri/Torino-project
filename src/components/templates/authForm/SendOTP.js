"use client";

import { useState } from "react";
//Services
import { useSendOtp } from "@/core/services/mutation";
//Utils
import { isValidateMobile } from "@/core/utils/validation";
//Icons
import { IoClose } from "react-icons/io5";
// import { toast } from "react-toastify";


function SendOTP(props) {
    const { signup, setSignup, setStep, mobile, setMobile, closeModal } = props;
    const [error, setError] = useState("");

    const modalHandler = () => {
        setSignup(signup)
    }

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
                    // toast.success(data?.data?.message)
                    // toast(data?.data?.code)
                    alert(data?.data?.message)
                    alert(data?.data?.code)

                    setStep(2);
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );
    };

    return(
        <div className="w-full h-full top-0 start-0 backdrop-blur-sm bg-black/20 fixed">
            <div className="flex items-center w-[561px] h-[362px] my-[12%] mx-auto p-5 bg-[#fff] rounded-[20px]">
                <div className="flex flex-col items-center w-full h-full mx-auto relative">
                    <IoClose onClick={closeModal} className="top-0 end-0 text-gray-600 size-5 absolute cursor-pointer"/>
                    <h1 className="my-9 mx-auto text-[28px] font-semibold text-[#282828] tracking-wider">ورود به تورینو</h1>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <div className="flex flex-col mb-9 text-start">
                            <label className="w-[200px] h-[25px] text-base font-normal text-gray-600 mb-3 tracking-wide">شماره موبایل خود را وارد کنید</label>
                            <input className="w-[491px] h-[54px] px-3 border-2 border-gray-300 bg-[#fff] text-gray-500 rounded-lg outline-0"
                                   type="text"
                                   placeholder="۰۹۱۲۳۳۳۲۳۲۳"
                                   value={mobile}
                                   onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        {!!error && <p className="-mt-7 mb-3 text-sm text-red-600">{error}</p>}
                        <button type="submit" disabled={isPending} className="w-[491px] h-[54px] bg-[#28A745] text-md font-semibold text-[#fff] rounded-lg tracking-wider hover:text-[#28A745] hover:bg-green-700 hover:text-[#fff]">
                            {!isPending ? "ارسال کد تایید" : "در حال ارسال"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendOTP