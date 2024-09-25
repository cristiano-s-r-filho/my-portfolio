import Navbar from "./../../widgets/Navbar"
import Footer from './../../widgets/Footer'
import MainBanner from './../../widgets/MainBanner'
// Create INTERFACE for props? I dunno...
export default function Page(){
    return(
        <div className="flex w-full h-full ">
            <Navbar></Navbar>
            <MainBanner></MainBanner>
            <Footer mainContact='criscrisdamoçada@gmail.com'></Footer>
        </div>
    )
}