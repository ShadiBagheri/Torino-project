import Image from "next/image";

function SignupBtnSm({ modalHandler }) {
    return(
        <button onClick={modalHandler}>
            <Image className="flex lg:hidden w-[26px] h-[26px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] mt-3 md:mt-3.5 z-10" src="/images/signin.png" width={40} height={40} alt="signin"/>
        </button>
    )
}

export default SignupBtnSm