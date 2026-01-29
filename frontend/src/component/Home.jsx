import { Footer } from "./Footer";
import { LandingPage } from "./Landingpage";
import { Navbar } from "./Navbar";

export function Home(){
    return(
        <>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <Footer></Footer>
        </>
    )
}