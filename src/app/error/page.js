import Image from "next/image";

export default function Error() {
    return(
        <div className="container flex items-center w-full h-full mx-auto pt-20 pb-32 md:py-0 md:my-20 lg:my-24 md:px-5 lg:px-0 bg-[#fff] dark:accent-slate-800">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:w-[1170px] mx-auto md:gap-8 lg:gap-0">
                <div className="container flex flex-col items-center lg:items-start mx-auto mb-2">
                    <h1 className="text-3xl md:text-2xl lg:text-4xl font-semibold text-[#282828] tracking-widest dark:text-white">اتصال با سرور برقرار نیست!</h1>
                    <h3>لطفا بعدا دوباره امتحان کنید.</h3>
                </div>
                <Image className="w-[500px] h-[480px] md:w-[330px] md:h-[320px] lg:w-[555px] lg:h-[555px]" src="/images/Error Lamp Robot.png" width={600} height={600} alt="notfound"/>
            </div>
        </div>
    )
}