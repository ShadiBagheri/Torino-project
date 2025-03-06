import Image from "next/image";
import Link from "next/link";
import { sp } from "@/core/utils/numbers";

function Card(props) {
    const {id, title, image, price ,options, fleetVehicle} = props;

    return(
        <div className="w-full h-[400xp] sm:h-[430px] md:w-[310px] md:h-[300px] lg:w-[278px] lg:h-[277px] md:my-6 xl:my-10 border-2 rounded-[10px] bg-[#fff]">
            <Image
                className="h-[220px] sm:h-[290px] md:w-[310px] md:h-[170px] lg:w-[278px] lg:h-[159px] rounded-t-[10px]"
                src={image}
                alt="image"
                width={550}
                height={550}
            />
            <div className="overflow-x-auto mt-2">
                <h1 className="px-2 text-[22px] md:text-[22px] font-normal">{title}</h1>
                <div className="flex w-[255px] mt-1 px-2 text-[15px] font-normal text-gray-500 overflow-x-auto">
                    <h2>{`${fleetVehicle} - ${options}`}</h2>
                </div>
                <div className="flex flex-row-reverse items-center justify-between mt-2 sm:mt-2 md:mt-2 p-2 sm:p-3 md:p-2 border-t-2 rounded-b-[10px]">
                    <h3 className="flex items-center text-[#009ECA] text-base sm:text-lg md:text-base font-normal">
                        {sp(price)}
                        <p className="mr-2 text-xs text-base md:text-xs text-gray-500">تومان</p>
                    </h3>
                    <button className="w-[100px] h-[30px] sm:w-[120px] sm:h-[40px] md:w-[70px] md:h-[30px] lg:w-[64px] lg:h-[25px] text-[#fff] bg-[#28A745] hover:bg-green-700 rounded">
                        <Link href={`/tours/${id}`}>رزرو</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card