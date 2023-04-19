 import styles from "..//styles/Login.module.css"
// import React from "react"
export default function Login () {
return (
    <>
    <div className={styles.container}>
        <div className={styles.header}>
        <h2 className={styles.h2}>Kejani Homes Login Page</h2>
  <p>Please enter your details</p>
        </div>

        <form className={styles.form} action="">
        <label className = {styles.unameLabel} htmlFor="username">Username:</label>
        <br />
     
        <input className = {styles.uname}type="text" id="username" name="username" />
        <br />
            <label className = {styles.passwordLabel} htmlFor="password">Password:</label>
            <br />
           
            <input className = {styles.uname} type="password" id="password" name="password" />
            <br />
            <button className= {styles.loginButton}type="submit">Login</button>
        </form>

<p className={styles.logo}>&#169; Kejani 2023</p>
    </div>

    </>
)

}