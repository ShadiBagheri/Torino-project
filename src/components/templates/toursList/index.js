//Module
import Card from "@/components/module/Card";
import NotFound from "@/app/404/page";

export async function ToursList({ data }) {
    // if (!data) return "توری یافت نشد!";
    if(!data.length) return <NotFound/>;

    return(
        <div className="flex items-center w-full mx-auto my-14 bg-[#fff]">
            <div className="container flex flex-col items-start justify-between w-full lg:w-[1270px] mx-auto px-5 md:px-2">
                <h1 className="mb-2 text-[32px] font-normal text-[#282828]">همه تورها</h1>
                <ul className="containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-y-12 md:gap-y-0 md:gap-x-12">
                    {data?.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}