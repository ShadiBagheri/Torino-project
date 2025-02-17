function TransactionsList(props) {
    const { createdAt, amount } = props;

    return(
        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-2 sm:px-6 py-4 text-[#282828] md:text-sm text-xs font-light whitespace-nowrap dark:text-white">
                {createdAt}
            </th>
            <th className="px-4 sm:px-6 py-4 text-[#282828] md:text-sm text-xs font-light">
                {amount}
            </th>
            <th className="hidden md:flex px-6 py-4 text-[#282828] md:text-sm text-xs font-light">
                ثبت نام در تورگردشگری
            </th>
            <th className="px-2 sm:px-6 py-4 text-[#282828] md:text-sm text-xs font-light">
                887423422
            </th>
        </tr>
    )
}

export default TransactionsList