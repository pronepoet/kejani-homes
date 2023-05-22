import styles from "../styles/Homepage.module.css"
import Layout from "../components/Layout"
import Footer from "../styles/Footer.module.css"
import Navbar from "../components/Navbar"

export default function  Homepage (){
    return (
        <>
            <Layout />
            <br />
            <br />
            <br />
            <br />  
            <br />
            <div className={styles.carousel}>
                <h3>Kejani Homes Carousel</h3>
              
            </div>
        </>
    )
}