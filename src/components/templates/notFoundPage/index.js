import Link from "next/link";
import Image from "next/image";

function NotFoundPage() {
    return(
        <div className="container flex items-center w-full h-full mx-auto pt-20 pb-32 md:py-0 md:my-20 lg:my-24 md:px-5 lg:px-0 bg-[#fff] dark:accent-slate-800">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:w-[1170px] mx-auto md:gap-8 lg:gap-0">
                <div className="container flex flex-col items-center lg:items-start mx-auto mb-2">
                    <h1 className="text-3xl md:text-2xl lg:text-4xl font-semibold text-[#282828] tracking-widest dark:text-white">صفحه مورد نظر یافت نشد!</h1>
                    <Link className="w-[300px] h-[60px] md:w-[230px] md:h-[53px] lg:w-[360px] lg:h-[74px] mt-6 md:mt-10 lg:mt-20 lg:mr-8 pt-5  md:pt-4 lg:pt-6 px-2 transition duration-500 bg-[#D8FFE1] hover:bg-green-600 hover:text-[#D8FFE1]
                     rounded-2xl text-center text-lg lg:text-[25px] font-semibold tracking-widest text-green-600 hover:text-[#D8FFE1]" href="/">
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
                <Image className="w-[500px] h-[480px] md:w-[330px] md:h-[320px] lg:w-[555px] lg:h-[555px]" src="/images/Error Tv.png" width={600} height={600} alt="notfound"/>
            </div>
        </div>
    )
}

export default NotFoundPage