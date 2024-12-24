import Banner from "@/components/module/Banner";
import BaseFooter from "@/components/module/BaseFooter";
import SearchBox from "@/components/module/SearchBox";
import Contact from "@/components/module/Contact";
import Tours from "@/components/templates/Tours";
import Slider from "@/components/module/Slider";

function HomePage() {

    return(
        <>
            <Banner/>
            <SearchBox/>
            <Tours/>
            <Contact/>
            <Slider/>
            <BaseFooter/>
        </>
    )
}

export default HomePage;