import Link from "next/link";
import Image from "next/image";

function NotFound() {
    return(
        <div className="flex items-center justify-between w-[1188px] my-24 mx-auto bg-[#fff] dark:accent-slate-800">
            <div className="flex flex-col items-center mb-8">
                <h1 className="mt-[-10] text-4xl font-semibold text-[#282828] dark:text-white">صفحه مورد نظر یافت نشد!</h1>
                <Link className="w-[361px] h-[75px] mt-24 pt-5 px-2 bg-[#D8FFE1] hover:bg-green-600 hover:text-[#D8FFE1]
                     rounded-2xl text-center text-[28px] font-semibold text-green-600 hover:text-[#D8FFE1]" href="/">
                    بازگشت به صفحه اصلی
                </Link>

            </div>
            <Image className="" src="/images/Error Tv.png" width={555} height={555} alt="notfound"/>
        </div>
    )
}

export default NotFound