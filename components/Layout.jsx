import Navbar from "./Navbar"
import styles from "../styles/Layout.module.css"
import Homepage from "../pages/homepage"
import Footer from "../pages/footer"
export default function Layout () {
    return (
        <>
            
        <Navbar />
  
     <div className={styles.name}>
     <h1>Kejani Homes</h1>
     <Homepage />   
     <Footer />
     </div>
   
        </>
    )
}