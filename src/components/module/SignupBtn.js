"use client";
import Image from "next/image";

function SignupBtn({ modalHandler }) {
    return(
        <button onClick={modalHandler} className="container flex items-center justify-between w-[166px] h-[44px] p-2 border-2 border-solid border-[#28A745] rounded-[8px]">
            <Image className="mr-2" src="/images/profile.png" width={20} height={20} alt="login-icon"/>
            <div className="flex w-[108px] h-[28px]">
                <p className="text-center text-lg font-medium text-[#28A745]">
                    ورود
                    <span className="mx-1">|</span>
                    ثبت نام
                </p>
            </div>
        </button>
    )
}

export default SignupBtn