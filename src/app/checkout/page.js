function CheckOutPage(props) {
    const { title, time } = props;

    return(
        <>
            <h1>{title}</h1>
            <h3>{time}</h3>
        </>
    )
}

export default CheckOutPage