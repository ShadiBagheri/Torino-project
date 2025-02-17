//Icons
import { RiSunFoggyFill } from "react-icons/ri";

function MyToursList(props) {
    const { title, name, fleetVehicle, origin, destination, start, end, endTime, price, tourNumber, } = props;

    return(
        <div className="container flex flex-col w-full h-[202px] sm:h-[180px] md:h-[170px] mx-auto mb-5 py-4 border-2 rounded-[10px] bg-[#fff]">
            <div className="container flex flex-col px-2 md:px-5">
                <div className="flex flex-col-reverse items-start md:flex-row md:items-center justify-between w-full">
                    <div className="flex items-center justify-between w-[80%] md:w-[40%]  mt-3 md:mt-0">
                        <div className="flex">
                            <RiSunFoggyFill className="ml-2 size-4 lg:size-4"/>
                            <h1 className="font-normal text-xs md:text-sm">{title}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="flex text-xs font-normal md:text-sm gap-1">
                                <p>سفر با</p>
                                {fleetVehicle}
                            </h1>
                        </div>
                    </div>
                    <h1 className="mr-40 sm:mr-80 md:mr-0 px-1 md:py-1 text-xs font-normal text-green-800 border-2 border-green-400 rounded-2xl bg-[#fff]">{endTime}</h1>
                </div>
                <div className="flex flex-col sm:flex-row my-5 gap-y-3 md:gap-y-0 sm:gap-x-16 lg:gap-x-16 xl:gap-x-20">
                    <div className="flex gap-x-[90px] sm:gap-x-7">
                        <div className="flex text-sm md:text-base font-semibold gap-1">
                            <h2>{origin.name}</h2>
                            <p>به</p>
                            <h2>{destination.name}</h2>
                        </div>
                        <h3 className="mt-0.5 text-xs md:text-base font-normal text-gray-600">{start}</h3>
                    </div>
                    <div className="flex gap-x-24 sm:gap-x-7">
                        <h2 className="text-sm md:text-base font-semibold">تاریخ برگشت</h2>
                        <h3 className="mt-0.5 text-xs md:text-base font-normal text-gray-600">{end}</h3>
                    </div>
                </div>
            </div>
            <div className="flex px-1 py-3 sm:py-5 border-t-2 sm:gap-x-6 md:gap-x-16 lg:gap-x-16 xl:gap-x-20">
                <div className="flex px-1 pt-2 sm:pt-0 sm:px-5 gap-x-3 sm:gap-x-4 border-l-2">
                    <p className="text-[10px] sm:text-sm md:text-base font-normal text-gray-600">شماره تور</p>
                    <p className="text-xs sm:text-sm md:text-base">{tourNumber}</p>
                </div>
                <div className="flex mt-1 sm:mt-0 px-2 sm:px-5 text-base font-normal gap-x-1 sm:gap-x-4">
                    <p className="text-[10px] sm:text-sm md:text-base text-gray-600">مبلغ پرداخت شده</p>
                    <p className="mt-1 sm:mt-0 text-xs sm:text-sm md:text-base font-medium">
                        {price}
                        <span className="mr-1 text-xs text-gray-600">تومان</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyToursList