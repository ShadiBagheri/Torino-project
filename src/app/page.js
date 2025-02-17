//Module
import Banner from "@/components/module/Banner";
import Contact from "@/components/module/Contact";
import Slider from "@/components/module/Slider";
import BaseFooter from "@/components/module/BaseFooter";
//Template
import SearchBox from "@/components/templates/searchBox";
//Services
import { serverDataFetch } from "@/core/services/http";
import { ToursList } from "@/components/templates/toursList";

async function Home({ searchParams }) {
    const toursData = await serverDataFetch("tour", searchParams,{ cache: "no-store" });

    return (
        <>
            <Banner/>
            {/*<SearchBox data={toursData}/>*/}
            <ToursList data={toursData}/>
            <Contact/>
            {/*<Slider/>*/}
            <BaseFooter/>
        </>
    );
}

export default Home
