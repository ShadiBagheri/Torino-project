//Module
import Card from "@/components/module/Card";
import NotFound from "@/app/404/page";

export async function ToursList({ data }) {
    // if (!data) return "محصولی یافت نشد!";
    if(!data.length) return <NotFound/>;

    return(
        <div className="flex items-center w-full mx-auto my-14">
            <div className="flex flex-col items-start justify-between w-[1270px] mx-auto px-2">
                <h1 className="mb-2 text-[32px] font-normal text-[#282828]">همه تورها</h1>
                <ul className="grid grid-cols-4 mx-auto gap-12">
                    {data?.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}