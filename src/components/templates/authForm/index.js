"use client";

import { useState } from "react";
//Queries
import { useGetUserData } from "@/core/services/queries";
//Templates/AuthForm
import CheckOTP from "@/components/templates/authForm/CheckOTP";
import SendOTP from "@/components/templates/authForm/SendOTP";
//Module
import NavButton from "@/components/module/NavButton";
import SignupBtn from "@/components/module/SignupBtn";


function AuthForm({ isLogin ,setIsLogin }) {
    const [mobile , setMobile] = useState("");
    const [step, setStep] = useState(1);
    const [isModalOpen, setIsOpenModal] = useState(true);

    const { data } = useGetUserData();

    const modalHandler = () => setIsOpenModal(!isModalOpen);
    const closeModal = () => setIsOpenModal(true);

    if (data?.data) return (
        <NavButton mobile={mobile} setMobile={setMobile}/>
    )
    return (
        <>
            <SignupBtn isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal} modalHandler={modalHandler}/>
            <div className="z-10">
                {!isModalOpen && step === 1 && (<SendOTP setStep={setStep} mobile={mobile} setMobile={setMobile} closeModal={closeModal} setIsLogin={setIsLogin}/>)}
                {step === 2 && (<CheckOTP setStep={setStep} mobile={mobile} setIsOpenModal={setIsOpenModal} isLogin={isLogin} setIsLogin={setIsLogin}/>)}
            </div>
        </>
    )
}

export default AuthForm