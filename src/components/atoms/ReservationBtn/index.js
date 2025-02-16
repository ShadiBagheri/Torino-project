"use client";
import { useAddToBasket } from "@/core/services/mutation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ReservationBtn({ id }) {
    const router = useRouter();
    const { mutate, isPending } = useAddToBasket();

    const reserveBtnHandler = () => {

        if (isPending) return;
        mutate( id,
            {
                onSuccess: (data) => {
                    console.log(data?.data)
                    toast.success(data?.data.message);
                    router.push("/basket")
                },
                onError: (error) => {
                    console.log(error)
                    toast.error(error.message)
                }
            }
            )
    }

    return(
        <>
            <button onClick={reserveBtnHandler} className="flex items-center w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] lg:text-2xl pr-10 lg:pr-14 text-xl font-normal text-[#fff] rounded-[10px] bg-[#28A745] hover:bg-green-700">
                رزرو و خرید
            </button>
        </>

    )
}

export default ReservationBtn