import {useGetBasket} from "@/core/services/queries";
import Link from "next/link";


function ToursBasket() {
    // const { data } = useGetBasket();
    // console.log(data)
    //
    // if (data) return <div>
    //     <p>سبد خرید شما خالی است</p>
    //     <Link href="/">برو به صفحه اصلی</Link>
    // </div>

    return(
        <div className="flex flex-col w-full h-[220px] sm:h-[160px] md:h-[180px] lg:w-[315px] lg:h-[240px] xl:w-[325px] xl:h-[250px] py-5 rounded-[10px] border-2 bg-[#fff]">
            <div className="flex items-center justify-between mb-5 mx-5">
                <h1 className="sm:text-2xl md:text-3xl lg:text-2xl font-normal">{data?.data?.title}</h1>
                <h1 className="sm:text-lg  md:text-xl lg:text-base font-normal text-gray-600">4 روز و شب</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between lg:flex-col px-5 border-t-2 border-dashed border-gray-700">
                <div className="flex items-center justify-between gap-x-24 sm:gap-x-10 md:gap-x-16 lg:gap-x-5 py-7">
                    <h2 className="sm:text-xl md:text-2xl lg:text-sm xl:text-base font-normal">قیمت نهایی</h2>
                    <h2 className="flex mt-1.5 xl:mt-0 sm:text-xl md:text-2xl lg:text-lg xl:text-[28px] font-normal text-blue-600 gap-x-2">{data?.data?.price}
                        <p className="mt-0.5 md:mt-1 xl:mt-1 sm:text-base md:text-lg lg:text-sm xl:text-base font-normal text-[#282828]">تومان</p>
                    </h2>
                </div>
                <button type="submit" className="mx-5 lg:px-0 w-full h-[50px] sm:w-[160px] sm:h-[45px] md:w-[190px] md:h-[55px] lg:w-full lg:h-[55px]  xl:h-[60px]  md:text-xl xl:text-2xl font-normal rounded-[10px] text-[#fff] bg-[#28A745] hover:bg-green-700">
                    ثبت و خرید نهایی
                </button>
            </div>
        </div>
    )
}

export default ToursBasket