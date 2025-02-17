"use client";

//Queries
import { useGetUserTours } from "@/core/services/queries";
//Templates
import MyToursList from "@/components/module/MyToursList";

function MyTours() {
    const { data } = useGetUserTours();

    return(
        <div className="w-full lg:w-[670px] xl:w-[950px] mb-5 p-5 border-2 rounded-[10px] gap-y-8">
            <div>
                {data?.data?.map(item => (
                    <MyToursList key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default MyTours