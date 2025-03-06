import Image from "next/image";
import {e2p} from "@/core/utils/numbers";

function BaseFooter() {
    return(
        <footer className="flex items-center bottom-0 py-8 px-10 lg:p-0 bg-[#fff] dark:bg-slate-800 mt-10">
            <div className="container flex mx-auto px-10 lg:p-0 w-full border-t">
                <div className="container flex flex-col lg:flex-row items-center justify-between w-full lg:w-[1270px] mx-auto mt-8 lg:my-8 gap-12 lg:gap-0">
                    <div className="flex w-full lg:w-[321px] lg:h-[109px] md:items-center lg:mr-5">
                        <Image className="w-[91px] h-[84px] md:w-[98px] md:h-[90px] lg:w-[121.24px] lg:h-[109.03px]" src="/images/Group 16.png" width={121.24} height={109.03} alt="Group 16"/>
                        <div className="flex flex-col mt-3 md:mt-4 lg:mt-3 items-start mr-6 lg:lg:mr-2">
                            <h1 className="mb-1 text-xl md:text-2xl font-semibold text-[#282828] dark:text-white">به صرفه ترین قیمت</h1>
                            <p className="md:mt-1 lg:mt-0 text-lg font-light md:font-normal lg:text-base text-[#282828] dark:text-white">به صرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-[325.11px] lg:h-[99.12px] md:items-center lg:mr-5">
                        <Image className="w-[90px] h-[84px] md:w-[97px] md:h-[90px] lg:w-[109.03px] lg:h-[99.12px]" src="/images/Group 17.png" width={109.03} height={99.12} alt="Group 17"/>
                        <div className="flex flex-col mt-1 md:mt-3 lg:mt-1 items-start mr-6 lg:mr-2">
                            <h1 className="mb-1 text-xl md:text-2xl font-semibold text-[#282828] dark:text-white">پشتیبانی</h1>
                            <p className="md:mt-1 lg:mt-0 text-lg font-light md:font-normal lg:text-base text-[#282828] dark:text-white">پشتیبانی و همراهی {e2p(24)} ساعته در تمامی مراحل سفر شما.</p>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-[304.08px] lg:h-[106.99px] md:items-center lg:mr-3">
                        <Image className="w-[94px] h-[84px] md:w-[98px] md:h-[90px] lg:w-[104.8px] lg:h-[104.8px]" src="/images/Group 18.png" width={104.8} height={104.8} alt="Group 18"/>
                        <div className="flex flex-col mt-2 md:mt-3 lg:mt-1 items-start mr-6 lg:mr-2">
                            <h1 className="mb-1 text-xl md:text-2xl font-semibold text-[#282828] dark:text-white">رضایت کاربران</h1>
                            <p className="md:mt-1 lg:mt-0 text-lg font-light md:font-normal lg:text-base text-[#282828] dark:text-white">رضایت بیش از {e2p(1000)} کاربر از تورهای ما.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default BaseFooter