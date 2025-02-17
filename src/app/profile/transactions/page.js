"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import TransactionsList from "@/components/module/TransactionsList";

function Transactions() {
    const { data } = useGetUserTransactions();

    return(
        <div className="w-full lg:w-[670px] xl:w-[950px] mb-5 border-2 rounded-[10px] gap-y-8">
            <div className="relative overflow-x-auto rounded-t-[10px]">
                <table className="w-full md:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="h-[40px] md:h-[55px] text-xs md:text-base text-gray-900 uppercase bg-gray-300 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-normal md:font-medium">
                            تاریخ و ساعت
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal md:font-medium">
                            مبلغ(تومان)
                        </th>
                        <th scope="col" className="hidden md:flex px-6 py-3 font-medium">
                            نوع تراکنش
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal md:font-medium">
                            شماره سفارش
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((item) => (
                            <TransactionsList key={item.key} {...item}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions