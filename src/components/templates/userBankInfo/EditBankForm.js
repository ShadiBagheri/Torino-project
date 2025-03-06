import {useEffect, useState} from "react";
//Services
import { useEditUserBankAccount } from "@/core/services/mutation";
//Utils
import { p2e } from "@/core/utils/numbers";
//Toastify
import { toast } from "react-toastify";



function EditBankForm({ isBankInfoOpen, setIsBankInfoOpen, bankForm, setBankForm }) {
    const [error, setError] = useState({
        shaba_code: "",
        debitCard_code: "",
        accountIdentifier: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setBankForm(bankForm => ({...bankForm, [name]: value}));
        setError(error => ({...error, [name]: ""}));
    }

    const { mutate, isPending } = useEditUserBankAccount();
    const { shaba_code, debitCard_code, accountIdentifier } = bankForm;

    useEffect(() => {
        if (bankForm){
            setBankForm({
                shaba_code: bankForm?.shaba_code,
                debitCard_code: bankForm?.debitCard_code,
                accountIdentifier: bankForm?.accountIdentifier,
            })
        }
    }, []);

    const bankFormValidation = () => {
        let error = {};
       if (shaba_code.length < 26) {
            error.shaba_code = "شماره شبا کمتر از 26 کاراکتر می باشد!";
        }
       if (debitCard_code.length < 16) {
            error.debitCard_code = "شماره کارت کمتر از 16 کاراکتر می باشد!";
       }
       if (accountIdentifier.length < 18) {
           error.accountIdentifier = "شماره حساب کمتر از 18 کاراکتر می باشد!";
       }
       return error;
    }

    const bankFormHandler = (event) => {
        event.preventDefault();
        const newErrors = bankFormValidation(bankForm);
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        if (isPending) return;
        mutate(
            { payment: bankForm },
            {
                onSuccess: (data) => {
                    console.log(data?.data)
                    toast.success(data?.data?.message);
                    setIsBankInfoOpen(!isBankInfoOpen);
                },
                onError: (error) => {
                    console.log(error)
                    toast.error("!خطایی پیش آمده است");
                },
            }
        );
    }
    const cancelBankFormHandler = () => setIsBankInfoOpen(!isBankInfoOpen);

    return(
        <div className="container flex flex-col h-[360px] mx-auto py-6 px-5 md:h-[300px] md:px-10 lg:py-4 lg:px-0 lg:w-[750px] lg:h-[215px] xl:w-[950px] border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:px-3 text-base font-normal md:text-lg text-[#282828] tracking-wide">ویرایش اطلاعات حساب بانکی</h1>
            <form onSubmit={bankFormHandler} className="flex flex-col w-full my-5">
                <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-between lg:grid-cols-3 lg:pr-3 lg:pl-4 gap-y-2 md:gap-x-10 md:gap-y-1 lg:gap-x-5">
                    <div className="flex flex-col lg:items-start h-[70px]">
                        <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <input type="text" id="shaba_code" name="shaba_code"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   value={p2e(bankForm.shaba_code)}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="shaba_code"
                                   className=" mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                شماره شبا
                            </label>
                        </div>
                        {!!error?.shaba_code && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.shaba_code}</p>)}
                    </div>
                    <div className="flex flex-col h-[70px]">
                        <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <input type="text" id="debitCard_code" name="debitCard_code"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   value={p2e(bankForm.debitCard_code)}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="debitCard_code"
                                   className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                شماره کارت
                            </label>
                        </div>
                        {!!error?.debitCard_code && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.debitCard_code}</p>)}
                    </div>
                    <div className="flex flex-col h-[70px]">
                        <div className="w-full h-[40px] md:w-[298px] md:h-[43px] lg:w-[220px] lg:h-[45px] xl:w-[280px] xl:h-[45px] px-2 relative">
                            <input type="text" id="accountIdentifier" name="accountIdentifier"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   value={p2e(bankForm.accountIdentifier)}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="accountIdentifier"
                                   className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
                                شماره حساب
                            </label>
                        </div>
                        {!!error?.accountIdentifier && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.accountIdentifier}</p>)}
                    </div>
                </div>
                <div className="container flex items-center w-full md:border-t-2 md:mt-3 lg:my-2 lg:px-6">
                    <div className="flex items-center justify-between md:items-end md:justify-end w-full mt-3 gap-x-4 sm:gap-x-8 md:gap-x-4">
                        <button type="submit" className="flex items-center w-full h-[37px] md:w-[120px] md:h-[45px] lg:w-[144px] lg:h-[46px] pr-12 sm:pr-20 md:pr-11 lg:pr-14 pt-1 duration-300 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                            تایید
                        </button>
                        <button type="button" onClick={cancelBankFormHandler} className="flex items-center w-full h-[37px] md:w-[120px] md:h-[45px] lg:w-[144px] lg:h-[46px] pr-9 sm:pr-[70px] md:pr-10 lg:pr-12 pt-1 duration-300 border-2 border-[#28A745] hover:bg-[#28A745] hover:text-[#fff] text-base font-semibold text-[#28A745] rounded-[5px]">
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditBankForm