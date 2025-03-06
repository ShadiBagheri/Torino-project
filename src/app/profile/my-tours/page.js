"use client";

//Queries
import { useGetUserTours } from "@/core/services/queries";
//Templates
import MyToursList from "@/components/module/MyToursList";

function MyTours() {
    const { data } = useGetUserTours();

    // if (data) return <h1>توری موجود نیست</h1>

    return(
        <div className="w-full lg:w-[670px] xl:w-[950px] px-5 border-2 rounded-[10px]">
            <div>
                {data?.data?.map(item => (
                    <MyToursList key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default MyTours