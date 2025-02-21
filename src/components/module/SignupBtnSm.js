import Image from "next/image";

function SignupBtnSm({ modalHandler }) {
    return(
        <button onClick={modalHandler}>
            <Image className="flex lg:hidden w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] z-10" src="/images/signin.png" width={40} height={40} alt="signin"/>
        </button>
    )
}

export default SignupBtnSm