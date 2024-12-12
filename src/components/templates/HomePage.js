import Image from "next/image";

function HomePage() {
    return(
        //w-full for homepage
        <>
            <footer className="flex">
                <div className="flex w-full lg:h-[169px] mt-60 mx-auto bg-[#fff] dark:bg-slate-800 border-t">
                    <div className="flex items-center justify-between w-[1250px] mx-auto">
                        <div className="flex j w-[331px] h-[109px] mr-5">
                            <Image src="/images/Group 16.png" width={121.24} height={109.03} alt="Group 16"/>
                            <div className="flex flex-col mt-3 items-start">
                                <h1 className="mb-1 text-[26px] font-medium text-[#282828] dark:text-white">به صرفه ترین قیمت</h1>
                                <p className="text-base font-light text-[#282828] dark:text-white">به صرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
                            </div>
                        </div>
                        <div className="flex w-[365.11px] h-[99.12px] mr-5">
                            <Image src="/images/Group 17.png" width={109.03} height={99.12} alt="Group 17"/>
                            <div className="flex flex-col mt-1 items-start">
                                <h1 className="mb-1 text-[26px] font-medium text-[#282828] dark:text-white">پشتیبانی</h1>
                                <p className="text-base font-light text-[#282828] dark:text-white">پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
                            </div>
                        </div>
                        <div className="flex w-[304.08px] h-[106.99px]">
                            <Image src="/images/Group 18.png" width={104.8} height={104.8} alt="Group 18"/>
                            <div className="flex flex-col mt-2 items-start">
                                <h1 className="mb-1 text-[26px] font-medium text-[#282828] dark:text-white">رضایت کاربران</h1>
                                <p className="text-base font-light text-[#282828] dark:text-white">رضایت بیش از 10 هزار کاربر از تورهای ما.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomePage;