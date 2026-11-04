import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const HomeLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default HomeLayout;