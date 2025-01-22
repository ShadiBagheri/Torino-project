function EditInfo() {
    return(
        <div className="flex flex-col w-[950px] h-[130px] py-4 px-5 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex items-center justify-between w-full mt-4 px-5">
                <div className="flex">
                    <h3 className="mt-0.5 text-sm font-light">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 mr-8">09193855854</p>
                </div>
                <form className="flex gap-5">
                    <div className="flex">
                        <input className="w-[270px] h-[45px] px-3 text-sm font-normal text-gray-500 border-2 rounded-[5px] outline-none" type="email" placeholder="آدرس ایمیل" name="email"/>
                    </div>
                    <button className="flex items-center w-[128px] h-[45px] pt-1 pr-12 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                        تایید
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditInfo