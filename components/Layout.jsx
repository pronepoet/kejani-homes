import Navbar from "./Navbar"
import styles from "../styles/Layout.module.css"
export default function Layout () {
    return (
        <>
            
        <Navbar />
     <div className={styles.name}>
     <h1>Kejani Homes</h1>
     </div>
         
        </>
    )
}