import { useState} from "react";
import Image from "next/image";
//Templates
import AuthForm from "@/components/templates/authForm";
//Module
import DropDown from "@/components/module/DropDown";
//Icons
import { SlArrowDown } from "react-icons/sl";

function NavButton({ mobile, setMobile }) {
    const [signup, setSignup] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [dropDown, setDropdown] = useState(false);

    const dropDownHandler = () => {
        setDropdown(!dropDown);
    }

    const signUpHandler = () => {
        setSignup(!signup);
    }

    return(
        <>
            {signup ? <AuthForm mobile={mobile} setMobile={setMobile} signup={signup} setSignup={setSignup} setIsLogin={setIsLogin} />  : null }
            {isLogin ? (
                    <div className="container flex items-center justify-between w-[180px] h-[44px] p-4">
                        <Image src="/images/profile.png" width={20} height={20} alt="login-icon"/>
                        <div className="flex items-center w-[108px] h-[28px] mt-2 mr-2">
                            <p className="text-center text-lg font-medium text-[#28A745]">
                                {mobile}
                            </p>
                        </div>
                        {dropDown ? <DropDown mobile={mobile}/> : null}
                        <SlArrowDown onClick={dropDownHandler} className="mt-1 text-[#28A745] size-4 cursor-pointer"/>
                    </div>
                ) : (
                    <button onClick={signUpHandler} className="container flex items-center justify-between w-[166px] h-[44px] p-2 border-2 border-solid border-[#28A745] rounded-[8px]">
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
        </>
    )
}


export default NavButton