"use client";

import { useState } from "react";
import { useCheckOtp } from "@/core/services/mutation";
//Otp
import OtpInput from 'react18-input-otp';
//Icons
import { IoIosArrowRoundBack } from "react-icons/io";


function CheckOTP({ mobile, setStep, setIsOpenModal }) {
    const [code, setCode] = useState("");
    const { mutate, isPending } = useCheckOtp();

    const submitHandler = (event) => {
        event.preventDefault();
        if (isPending) return;

        mutate({ mobile ,code }, {
            onSuccess: (data) => {
                console.log(data)
                setIsOpenModal(false)
                setStep(1)
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    const changeHandler = (otp) => {
        setCode(otp);
    }

    return(
        <div className="w-full h-full top-0 start-0 backdrop-blur-sm bg-black/20 fixed">
            <div className="flex items-center w-[561px] h-[362px] my-[12%] mx-auto p-5 bg-[#fff] rounded-[20px]">
                <div className="flex flex-col items-center w-full h-full mx-auto relative">
                    <IoIosArrowRoundBack onClick={() => setStep(1)} className="top-0 end-0 text-gray-600 size-10 absolute cursor-pointer"/>
                    <h1 className="mt-9 mb-2 mx-auto text-[28px] font-semibold text-[#282828] tracking-wider">کد تایید را وارد کنید.</h1>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <div  style={{ direction: "ltr" }} className="flex flex-col items-center mb-6 text-center mx-auto">
                            <label className="flex h-[25px] text-lg font-medium text-gray-800 mb-3 tracking-wide">
                                کد تایید به شماره {mobile} ارسال شد
                            </label>
                            <OtpInput className="w-[58px] h-[53px] text-center p-5 border-2 border-gray-300 bg-[#fff] text-gray-500 rounded-lg m-2"
                                      numInputs={6}
                                      value={code}
                                      onChange={changeHandler}
                            />
                            <p className="mt-3 text-sm font-medium text-gray-600 tracking-wider">تا ارسال مجدد کد</p>
                        </div>
                        <button type="submit" className="w-[491px] h-[54px] bg-[#28A745] text-md font-semibold text-[#fff] rounded-lg tracking-wider hover:text-[#28A745] hover:bg-green-700 hover:text-[#fff]">
                            ورود به تورینو
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOTP