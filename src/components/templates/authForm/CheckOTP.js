"use client";

import { useEffect, useState } from "react";
import { useCheckOtp } from "@/core/services/mutation";
//Utils
import {e2p, p2e} from "@/core/utils/numbers";
//Otp
import OtpInput from 'react18-input-otp';
//Icons
import { IoIosArrowRoundBack } from "react-icons/io";


function CheckOTP({ mobile, setStep, setIsOpenModal }) {
    const [code, setCode] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    const { mutate, isPending } = useCheckOtp();

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(30);
            } else {
                clearInterval(interval);
                setStep(1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, minutes]);


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
            <div className="flex items-center w-[300px] h-[250px] sm:w-[410px] sm:h-[300px] md:w-[460px] md:h-[340px] lg:w-[510px] lg:h-[350px] xl:w-[561px] xl:h-[362px] my-[34%] sm:my-[17%] md:my-[11%] lg:my-[8%] xl:my-[12%] mx-auto p-5 bg-[#fff] rounded-[20px]">
                <div className="flex flex-col items-center w-full h-full mx-auto relative">
                    <IoIosArrowRoundBack onClick={() => setStep(1)} className="top-0 end-0 text-gray-600 size-10 absolute cursor-pointer"/>
                    <h1 className="mt-9 mb-2 mx-auto text-[28px] font-semibold text-[#282828] tracking-wider">کد تایید را وارد کنید.</h1>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <div  style={{ direction: "ltr" }} className="flex flex-col items-center mb-6 text-center mx-auto">
                            <label className="flex h-[25px] text-lg font-medium text-gray-800 mb-3 tracking-wide">
                                کد تایید به شماره {e2p(mobile)} ارسال شد
                            </label>
                            <OtpInput className="w-[50px] h-[55px] pl-4 pt-2 text-center border-2 border-gray-300 bg-[#fff] text-gray-500 rounded-lg m-2"
                                      numInputs={6}
                                      inputStyle="w-full outline-0"
                                      value={p2e(code)}
                                      onChange={changeHandler}
                            />
                            <p className="flex mt-3 text-sm font-medium text-gray-600 tracking-wider">
                                تا ارسال مجدد کد
                                <span className="flex flex-row-reverse ml-2 font-semibold">
                                    {e2p(minutes)} : {e2p(seconds) < 10 ? `0${e2p(seconds)}` : e2p(seconds)}
                                </span>
                            </p>
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