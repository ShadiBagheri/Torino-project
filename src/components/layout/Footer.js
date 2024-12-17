import Image from "next/image";
import Link from "next/link";

function Footer() {
    return(
        <footer className="flex flex-col items-center w-full lg:h-[360px] bottom-0 px-10 lg:px-0 bg-[#fff] dark:bg-slate-800">
            <div className="container flex flex-col lg:flex-row items-center justify-between lg:w-[1270px] mx-auto pt-8 pb-3 lg:py-5 border-t-4 border-dashed lg:border-t lg:border-solid gap-8 lg:gap-0">
                <div className="container flex items-center justify-between w-full lg:w-[500px]">
                    <div className="flex flex-col lg:ml-20">
                        <h1 className="text-[26px] md:text-3xl lg:text-2xl font-semibold text-[#282828] dark:text-white">تورینو</h1>
                        <div className="flex flex-col mt-2 lg:mt-5">
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/about">درباره ما</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/contact">تماس با ما</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">چرا تورینو</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">بیمه مسافرتی</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[26px] md:text-3xl lg:text-2xl font-semibold text-[#282828] dark:text-white">خدمات مشتریان</h1>
                        <div className="flex flex-col mt-2 lg:mt-5">
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">پشتیبانی آنلاین</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">راهنمای خرید</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">راهنمای استرداد</Link>
                            <Link className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-lg font-normal text-[#282828] dark:text-white" href="/">پرسش و پاسخ</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse lg:flex-col justify-between lg:items-end w-full md:my-4 lg:my-0">
                    <div className="flex flex-col mt-10 items-end px-2 md:p-0">
                        <Image className="w-[130px] h-[36px] md:w-[135px] md:h-[40px] lg:w-[146px] lg:h-[44px]" src="/images/torino.png" width={146} height={44} alt="torino-logo"/>
                        <h4 className="mt-5 md:mt-6 mb-8 text-lg md:text-xl font-normal dark:text-white">تلفن پشتیبانی: 8574-021</h4>
                    </div>
                    <div className="flex flex-col-reverse items-center lg:flex-row gap-5 md:gap-10 lg:gap-10">
                        <div className="flex gap-5 md:gap-10 lg:gap-10">
                            <Image className="w-[60px] h-[65px] md:w-[65px] md:h-[70px] lg:w-[78px] lg:h-[74px]" src="/images/airline.png" width={78} height={74} alt="airline-logo"/>
                            <Image className="w-[60px] h-[65px] md:w-[65px] md:h-[70px] lg:w-[71px] lg:h-[74px]" src="/images/passenger.png" width={71} height={74} alt="passenger-logo"/>
                        </div>
                        <div className="flex gap-5 md:gap-10 lg:gap-10">
                            <Image className="w-[60px] h-[65px] md:w-[65px] md:h-[70px] lg:w-[71px] lg:h-[74px]" src="/images/qrcode.png" width={68} height={74} alt="qrcode-logo"/>
                            <Image className="w-[60px] h-[65px] md:w-[65px] md:h-[70px] lg:w-[71px] lg:h-[74px]" src="/images/samandehi.png" width={67} height={74} alt="samandehi-logo"/>
                            <Image className="w-[60px] h-[65px] md:w-[65px] md:h-[70px] lg:w-[71px] lg:h-[74px]" src="/images/aria.png" width={68} height={74} alt="aria-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <p className="w-full py-3 lg:mt-4 border-t text-center text-[15px] font-normal dark:text-white">
                کلیه حقوق این وبسایت متعلق به تورینو میباشد.
            </p>
        </footer>
    )
}

export default Footer