"use client";

import Link from "next/link";
import useQuery from "@/core/hooks/query";

function PaymentPage() {
    const { getQuery } = useQuery();
    const status = getQuery("status");

    if (status === "success") return (
        <div className="flex w-full my-10 px-10 bg-[#fff]">
            <div className="container flex items-center w-[1270px] my-10 mx-auto bg-[#fff]">
                <div className="flex flex-col items-center mx-auto py-8 px-4 md:py-12 lg:py-16 md:px-10 border-2 rounded-[10px] gap-12">
                    <h1 className="py-1 px-3 text-md md:text-xl rounded-md text-[#fff] bg-[#28A745]">سفارش تکمیل شد!</h1>
                    <div className="flex flex-col items-center gap-12">
                        <h2 className="text-lg md:text-2xl rounded-md text-[#28A745]">پرداخت شما با موفقیت انجام شد.</h2>
                        <div className="flex items-center justify-between gap-10">
                            <Link href="/" className="py-2 md:py-2 px-3 md:px-4 duration-300 text-xs md:text-lg border-2 border-[#28A745] rounded-md bg-[#fff] hover:bg-[#28A745] hover:border-0 hover:text-[#fff]">
                                بازگشت به صفحه اصلی
                            </Link>
                            <Link href="/profile/my-tours" className="py-2 md:py-2 px-3 md:px-4 duration-300 text-xs md:text-lg border-2 border-[#28A745] rounded-md bg-[#fff] hover:bg-[#28A745] hover:border-0 hover:text-[#fff]">
                                مشاهده سفارش
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className="flex w-full my-10 px-10 bg-[#fff]">
            <div className="container flex items-center w-[1270px] my-10 mx-auto bg-[#fff]">
                <div className="flex flex-col items-center w-full md:w-[400px] lg:w-[600px] mx-auto py-8 px-4 md:py-12 lg:py-16 md:px-10 border-2 rounded-[10px] gap-10">
                    <h2 className="text-lg md:text-2xl rounded-md text-[#282828]">پرداخت انجام نشد!</h2>
                    <Link href="/" className="py-2 md:py-2 px-3 md:px-4 duration-300 text-xs md:text-lg border-2 border-[#28A745] rounded-md bg-[#fff] hover:bg-[#28A745] hover:border-0 hover:text-[#fff]">
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage