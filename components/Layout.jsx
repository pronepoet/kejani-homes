import Navbar from "./Navbar"
import styles from "../styles/Layout.module.css"
import Homepage from "../pages/homepage"
import Footer from "../pages/footer"
export default function Layout ({children}) {
    return (
        <>
            
    <Navbar />
  
   <Footer />
        </>
    )
}