import CheckoutPage from "@/components/templates/checkoutPage";

function CheckOutPage(props) {
    const { title, time } = props;

    return(
        <>
            <h1>{title}</h1>
            <h3>{time}</h3>
            {/*<CheckoutPage/>*/}
        </>
    )
}

export default CheckOutPage