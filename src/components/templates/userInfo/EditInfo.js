import { useState } from "react";
//Services
import { useEditUserInfoProfile } from "@/core/services/mutation";
//Toastify
import { toast } from "react-toastify";

function EditInfo({ isInfoOpen, setIsInfoOpen, infoForm, setInfoForm }) {
    const [error, setError] = useState("");

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfoForm((infoForm) => ({ ...infoForm, [name]: value }));
        setError((error) => ({ ...error, [name]: "" }));
    };

    const { mutate, isPending } = useEditUserInfoProfile();
    const { email  } = infoForm;

    const validateMail = () => {
        let error = {};
        if (email.length !== "/^[^\s@]+@[^\s@]+\.[^\s@]+$/") { error.email = "لطفا ایمیل معتبر وارد کنید!";}
        return error;
    }

    const editInfoHandler = (event) => {
        event.preventDefault();

        const newErrors = validateMail(infoForm);
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        if (isPending) return;
        mutate({ infoForm }, {
            onSuccess: (data) => {
                console.log(data?.data);
                toast.success(data?.data?.message);
                setIsInfoOpen(!isInfoOpen)
            },
            onError: (error) => {
                console.log(error);
                toast.error("خطایی در به‌روزرسانی اطلاعات پیش آمده!");
            }
        });
    };

    return (
        <div className="container flex flex-col h-[180px] lg:w-[750px] lg:h-[140px] xl:w-[950px] md:px-10 py-6 px-5 lg:py-2 lg:px-3 border-2 rounded-[10px] bg-[#fff]">
            <h1 className="lg:mt-2 text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mt-4 md:mt-8 lg:mt-1 lg:pr-5 lg:pl-3 md:gap-10">
                <div className="flex items-center justify-between w-full md:w-[180px]">
                    <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره موبایل</h3>
                    <p className="text-sm font-normal mt-1 md:text-base lg:text-sm">09193855854</p>
                </div>
                {/* md - lg size */}
                <form onSubmit={editInfoHandler} className="hidden md:flex items-center justify-between mt-6 md:mt-3 lg:mr-5">
                    <div className="flex flex-col h-[70px]">
                        <div className="md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[45px] px-3 ml-4 relative">
                            <input type="email" id="email"
                                   className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   placeholder=" "
                                   name="email"
                                   value={infoForm.email}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="email"
                                   className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4">
                                آدرس ایمیل
                            </label>
                        </div>
                        {!!error?.email && (<p className="mt-3 text-red-700 font-medium text-xs z-10">{error?.email}</p>)}
                    </div>
                    <button type="submit" className="flex items-center mb-6 md:w-[120px] md:h-[45px] lg:w-[130px] lg:h-[46px] pt-1 md:pr-11 lg:pr-12 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px] duration-300">
                        تایید
                    </button>
                </form>
                {/* xs - sm size */}
                <form onSubmit={editInfoHandler} className="md:hidden flex items-center justify-between w-full mt-5 md:mt-0 gap-2">
                    <div className="flex flex-col w-full h-[70px]">
                        <div className="flex w-full relative">
                            <input id="email"
                                   className="w-full h-[40px] px-3 text-sm font-normal text-gray-600 rounded-[5px] outline-none border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
                                   type="email"
                                   placeholder=""
                                   name="email"
                                   value={infoForm.email}
                                   onChange={changeHandler}
                            />
                            <label htmlFor="email"
                                   className="mr-2 mt-0 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4">
                                آدرس ایمیل
                            </label>
                        </div>
                        {!!error?.email && (<p className="mt-1 text-red-700 font-medium text-xs z-10">{error?.email}</p>)}
                    </div>
                    <button type="submit" className="flex items-center w-[93px] h-[39px] mb-7 pr-6 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
                        تایید
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditInfo;

// import { useState } from "react";
// //Services
// import { useEditUserInfoProfile } from "@/core/services/mutation";
// //Toastify
// import { toast } from "react-toastify";
//
//
// function EditInfo({ isInfoOpen, setIsInfoOpen }) {
//     const [infoForm, setInfoForm] = useState({ email: ""});
//     const [error, setError] = useState({ email: ""});
//
//     const changeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInfoForm(infoForm => ({...infoForm, [name]: value}));
//         setError(error => ({...error, [name]: ""}));
//     }
//
//     const { mutate } = useEditUserInfoProfile();
//     const { email } = infoForm;
//
//     const validate = () => {
//         let error = {};
//         if (!email.length) return error.email = "لطفا ایمیل را به درستی وارد کنید!";
//         console.log(error)
//         return error;
//     }
//
//     const editInfoHandler = (event) => {
//         event.preventDefault()
//
//         const validationErrors = validate(infoForm);
//         if (Object.keys(validationErrors).length > 0) {
//             setError(validationErrors);
//             return;
//         }
//
//         mutate({ infoForm },
//             {
//                 onSuccess: (data) => {
//                     console.log(data?.data)
//                     toast.success(data?.data?.message);
//                     setIsInfoOpen(!isInfoOpen)
//                 },
//                 onError: (error) => {
//                     console.log(error)
//                 }
//             }
//             )
//
//     }
//
//     return(
//         <div className="container flex flex-col h-[169px] lg:w-[750px] lg:h-[130px] xl:w-[950px] xl:h-[130px] md:px-10 py-6 px-5 lg:py-2 lg:px-3 border-2 rounded-[10px] bg-[#fff]">
//             <h1 className="lg:mt-2 text-base font-normal text-[#282828] tracking-wide">اطلاعات حساب کاربری</h1>
//             <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto mt-4 md:mt-8 lg:mt-4 lg:pr-5 lg:pl-3 md:gap-10">
//                 <div className="flex items-center justify-between w-full md:w-[180px]">
//                     <h3 className="mt-0.5 text-sm font-light md:text-base lg:text-sm">شماره موبایل</h3>
//                     <p className="text-sm font-normal mt-1 md:text-base lg:text-sm">09193855854</p>
//                 </div>
//                 {/* md - lg size */}
//                 <form onSubmit={editInfoHandler} className="hidden md:flex items-center justify-between lg:mr-5 mt-6 md:mt-0">
//                     <div className="md:w-[240px] md:h-[43px] lg:w-[280px] lg:h-[45px] px-3 ml-4 relative">
//                         <input type="email" id="email"
//                                className="-mr-2 absolute flex px-3 pb-2 pt-4 w-full text-sm font-normal text-gray-600 bg-[#fff] rounded-[5px] border-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-400 peer"
//                                placeholder=" "
//                                name= "email"
//                                value={infoForm.email}
//                                onChange={changeHandler}
//                         />
//                         <label htmlFor="email"
//                                className="mr-2 mt-1 px-1 absolute text-sm font-normal text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fff] peer-focus:text-gray-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 ltr:peer-focus:right-auto ltr:peer-focus:translate-x-1/2">
//                             آدرس ایمیل
//                         </label>
//                     </div>
//                     <button type="submit" className="flex items-center md:w-[120px] md:h-[45px] lg:w-[130px] lg:h-[46px] pt-1 md:pr-11 lg:pr-12 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px] duration-300">
//                         تایید
//                     </button>
//                 </form>
//                 {/* xs - sm size*/}
//                 <form onSubmit={editInfoHandler} className="md:hidden flex items-center justify-between w-full mt-5 md:mt-0 gap-2">
//                     <div className="flex w-full">
//                         <input className="w-full h-[40px] px-3 text-sm font-normal text-gray-600 border-2 border-gray-500 rounded-[5px] outline-none"
//                                type="email"
//                                placeholder="آدرس ایمیل"
//                                name= "email"
//                                value={infoForm.email}
//                                onChange={changeHandler}
//                         />
//                     </div>
//                     <button type="submit" className="flex items-center w-[93px] h-[37px] pr-6 bg-[#28A745] hover:bg-green-700 text-base font-semibold text-[#fff] rounded-[5px]">
//                         تایید
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }
//
// export default EditInfo