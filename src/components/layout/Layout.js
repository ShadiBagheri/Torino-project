import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Layout({ children }) {
    return(
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default Layout