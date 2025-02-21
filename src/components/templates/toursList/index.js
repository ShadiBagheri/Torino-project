//Module
import Card from "@/components/module/Card";


export async function ToursList({ data }) {
    if (!data.length) return (
        <div className="flex items-center w-full mx-auto my-14 px-5 sm:px-10">
            <div className="container flex items-center w-[390px] sm:w-[500px] md:w-[600px] lg:w-[1270px] h-[200px] mx-auto shadow-md rounded-lg px-10 bg-[#fff]">
                <h1 className="mx-auto py-2 px-3 text-2xl lg:text-3xl border-b-2 border-[#28A745]">توری یافت نشد!</h1>
            </div>
        </div>
    )

    return(
        <div className="flex items-center w-full mx-auto my-14 bg-[#fff]">
            <div className="container flex flex-col items-start justify-between w-full lg:w-[1270px] mx-auto px-5 md:px-2">
                <h1 className="mb-2 md:mr-5 lg:mr-2 xl:mr-0 text-2xl lg:text-[32px] font-normal text-[#282828]">همه تورها</h1>
                <ul className="containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-y-12 md:gap-y-0 md:gap-x-12">
                    {data?.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}