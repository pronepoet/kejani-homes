 import styles from "..//styles/Login.module.css"
// import React from "react"
export default function Login () {
return (
    <>
    <div className={styles.container}>
        <div className={styles.header}>
        <h2 className={styles.h2}>Login</h2>

        </div>

        <form className={styles.form} action="">
        <label className = {styles.unameLabel} htmlFor="username">Username:</label>
        <br />
     
        <input className = {styles.uname}type="text" placeholder="Phone Number/Email Address" id="username" name="username" />
        <br />
            <label className = {styles.passwordLabel} htmlFor="password">Password:</label>
            <br />
           
            <input className = {styles.uname} type="password" placeholder="Password"  id="password" name="password" />
            <br />
            <button className= {styles.loginButton}type="submit">Login</button>
        </form>

<p className={styles.logo}>&#169; Do not have an account? <span className={styles.signUp}>Sign Up</span> now</p>
    </div>

    </>
)

}