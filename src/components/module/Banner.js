import Image from "next/image";


function Banner() {
    return(
        <div className="flex flex-col items-center w-full">
            <Image className="w-full h-[180px] sm:h-[260px] md:h-[300px] lg:h-[330px] xl:h-[390px]" src="/images/banner.png" width={2000} height={400} alt="banner"/>
            <div className="w-full flex flex-col items-center my-5 sm:my-6 lg:my-10 mx-auto">
                <h1 className="text-base sm:text-xl lg:text-[28px] font-semibold text-[#595959] tracking-wider">
                    <span className="text-[#28A745] ml-2">تورینو</span>
                    برگزار کننده بهترین تورهای داخلی و خارجی
                </h1>
            </div>
        </div>
    )
}

export default Banner