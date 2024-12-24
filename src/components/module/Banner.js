import Image from "next/image";


function Banner() {
    return(
        <div className="flex flex-col items-center w-full mx-auto">
            <Image className="h-[350px]" src="/images/banner.png" width={2000} height={400} alt="banner"/>
            <div className="flex flex-col items-center my-5 mx-auto">
                <h1 className="text-[28px] font-semibold text-[#595959] tracking-wider">
                    <span className="text-[#28A745] ml-2">تورینو</span>
                    برگزار کننده بهترین تورهای داخلی و خارجی
                </h1>
            </div>
        </div>
    )
}

export default Banner