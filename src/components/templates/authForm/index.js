"use client";

import { useState } from "react";
//Templates/AuthForm
import CheckOTP from "@/components/templates/authForm/CheckOTP";
import SendOTP from "@/components/templates/authForm/SendOTP";


function AuthForm({ mobile, setMobile, isLogin ,setIsLogin }) {
    const [step, setStep] = useState(1);
    const [isModalOpen, setIsOpenModal] = useState(true);

    const closeModal = () => {
        setIsOpenModal(false);
        setStep(1)
    }

    return(
        <div className="z-10">
            {isModalOpen && (<SendOTP setStep={setStep} mobile={mobile} setMobile={setMobile} closeModal={closeModal} setIsLogin={setIsLogin}/>)}
            {step === 2 && (<CheckOTP setStep={setStep} mobile={mobile} setIsOpenModal={setIsOpenModal} isLogin={isLogin} setIsLogin={setIsLogin}/>)}
        </div>
    )
}

export default AuthForm