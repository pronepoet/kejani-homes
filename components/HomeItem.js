import React from 'react'
import Link from 'next/link'
import articleStyles from '../styles/Listing.module.css'
const HomeItem = ({article}) => {
  return (
    <>
    <div className={articleStyles.main}>
 
      <Link legacyBehavior href="/article/[id]" as={`/article/${article.id}`}>
        <a className={articleStyles.card}>
     
            <h2>{article.title}&rarr;</h2>
            <p>{article.description}</p>
        
        </a>
   
    </Link>
      </div>
  


    </>
  )
}

export default HomeItem