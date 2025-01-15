"use client";
import Link from "next/link";

function ReservationBtn() {
    return(
        <>
            <button className="hidden lg:flex lg:w-[204px] lg:h-[56px] items-center text-2xl font-normal text-[#fff] rounded-[10px] bg-[#28A745] hover:bg-green-700">
                <Link className="mx-auto" href="/checkout">رزرو و خرید</Link>
            </button>
            <button className="flex items-center w-[154px] h-[42px] text-xl lg:hidden font-normal text-[#fff] rounded-[10px] bg-[#28A745] hover:bg-green-700">
                <Link className="mx-auto" href="/checkout">رزرو و خرید</Link>
            </button>
        </>

    )
}

export default ReservationBtn