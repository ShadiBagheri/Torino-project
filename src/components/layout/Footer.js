import Image from "next/image";

function Footer() {
    return(
        <footer className="flex flex-col items-center lg:h-[290px] bottom-0 mx-auto bg-[#fff] dark:bg-slate-800">
            <div className="flex flex-col items-center w-full mx-auto border-b">
                <div className="flex items-center justify-between w-[1250px] mx-auto py-6 border-t">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold text-[#282828] dark:text-white">تورینو</h1>
                        <div className="mt-5">
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">درباره ما</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">تماس با ما</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">چرا تورینو</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">بیمه مسافرتی</p>
                        </div>
                    </div>
                    <div className="flex flex-col ml-64">
                        <h1 className="text-2xl font-semibold text-[#282828] dark:text-white">خدمات مشتریان</h1>
                        <div className="mt-5">
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">پشتیبانی آنلاین</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">راهنمای خرید</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">راهنمای استرداد</p>
                            <p className="mt-1 text-lg font-normal text-[#282828] dark:text-white">پرسش و پاسخ</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <Image src="/images/torino.png" width={146} height={44} alt="torino-logo"/>
                        <h4 className="mt-5 mb-8 text-[15px] font-normal dark:text-white">تلفن پشتیبانی: 8574-021</h4>
                        <div className="flex gap-8">
                            <Image src="/images/airline.png" width={78} height={74} alt="airline-logo"/>
                            <Image src="/images/passenger.png" width={71} height={74} alt="passenger-logo"/>
                            <Image src="/images/qrcode.png" width={68} height={74} alt="qrcode-logo"/>
                            <Image src="/images/samandehi.png" width={67} height={74} alt="samandehi-logo"/>
                            <Image src="/images/aria.png" width={68} height={74} alt="aria-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-[15px] font-normal dark:text-white">کلیه حقوق این وبسایت متعلق به تورینو میباشد.</p>
        </footer>
    )
}

export default Footer