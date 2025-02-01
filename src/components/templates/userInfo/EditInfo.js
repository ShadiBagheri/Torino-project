function EditInfo() {
    return(
        <div className="container flex flex-col h-[169px] lg:w-[750px] lg:h-[130px] xl:w-[950px] xl:h-[130px] md:px-10 py-6 px-5 lg:py-2 lg:px-3 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:mt-2 text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mt-4 md:mt-8 lg:mt-4 lg:pr-5 lg:pl-3 md:gap-10">
                <div className="flex items-center justify-between w-full md:w-[180px]">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 md:text-base lg:text-sm">09193855854</p>
                </div>
                {/* md - lg size */}
                <form className="hidden md:flex items-center justify-between mt-6 md:mt-0">
                    <div className="flex w-full -ml-3">
                        <input className="md:w-[240px] md:h-[43px] lg:w-[255px] lg:h-[45px] px-3 text-sm font-normal text-gray-500 border-2 rounded-[5px] outline-none" type="email" placeholder="آدرس ایمیل" name="email"/>
                    </div>
                    <button className="flex items-center md:w-[120px] md:h-[40px] lg:w-[130px] lg:h-[42px] pt-1 md:pr-9 lg:pr-10 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                        تایید
                    </button>
                </form>
                {/* xs - sm size*/}
                <form className="md:hidden flex items-center justify-between w-full mt-5 md:mt-0 gap-2">
                    <div className="flex w-full">
                        <input className="w-full h-[40px] px-3 text-sm font-normal text-gray-500 border-2 rounded-[5px] outline-none" type="email" placeholder="آدرس ایمیل" name="email"/>
                    </div>
                    <button className="flex items-center w-[93px] h-[37px] pr-5 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                        تایید
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditInfo