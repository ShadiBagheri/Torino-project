
function EditBankForm() {
    return(
        <div className="container flex flex-col w-full h-[251px] mx-auto py-4 px-5 md:px-10 lg:py-4 lg:px-0 lg:w-[750px] lg:h-[180px] xl:w-[950px] xl:h-[200px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">اطلاعات حساب بانکی</h1>
            <form className="w-full mt-4">
                <div className="flex items-center px-3 gap-x-9">
                    <div className="w-[280px] h-[45px] px-3 relative">
                        <input type="text" id="full_name"
                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                               placeholder=" "
                        />
                        <label htmlFor="full_name"
                               className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            شماره شبا
                        </label>
                    </div>
                    <div className="w-[280px] h-[45px] px-3 relative">
                        <input type="number" id="code"
                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                               placeholder=" "
                        />
                        <label htmlFor="code"
                               className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            شماره حساب
                        </label>
                    </div>
                    <div className="w-[280px] h-[45px] px-3 relative">
                        <input type="number" id="code"
                               className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                               placeholder=" "
                        />
                        <label htmlFor="code"
                               className="mr-2 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                            شماره کارت
                        </label>
                    </div>
                </div>
                <div className="flex items-center w-full border-t-2 px-3 my-6">
                    <div className="flex mt-3 mr-[607px] gap-x-4">
                        <button className="flex items-center w-[144px] h-[41px] pr-14 pt-1 duration-300 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                            تایید
                        </button>
                        <button className="flex items-center w-[144px] h-[41px] pr-12 pt-1 duration-300 border-2 border-[#28A745] hover:bg-[#28A745] hover:text-[#fff] text-base font-semibold text-[#28A745] rounded-[5px]">
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditBankForm