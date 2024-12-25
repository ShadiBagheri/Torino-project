"use server";

import Card from "@/components/module/Card";

async function Tours() {
    try{
        const res = await fetch("http://localhost:6500/tour");
        if (!res){
            throw new Error("Response Network is not work");
        }
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log("Failed to fetch tours", error);
        return Promise.reject("Error Loading Tours!");
    }

    return(
        <div className="flex items-center w-full mx-auto my-16">
            <div className="flex flex-col items-start justify-between w-[1270px] mx-auto px-2">
                <h1 className="mb-2 text-[32px] font-normal text-[#282828]">همه تورها</h1>
                <ul className="grid grid-cols-4 mx-auto gap-12">
                    {data.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tours

