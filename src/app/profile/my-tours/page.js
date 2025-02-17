//Queries
import { useGetUserTours } from "@/core/services/queries";

function MyTours() {

    const { data } = useGetUserTours();
    return(
        <h1>My tours</h1>
    )
}

export default MyTours