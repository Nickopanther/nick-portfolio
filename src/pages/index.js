import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {

  return (
    <>
    <SEO title="Home" description="Home description" />
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Nick Azzarello</h2>
          <p>Videographer, Alexa Skill Developer, &amp; Web Developer</p>  
          <Link className={styles.btn} to ="/projects">My Portfolio Projects</Link>
        </div>  
        <iframe width="617" height="343" src="https://www.youtube.com/embed/pETA3tjP6Os" 
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen title="Nick Azzarello's Website" style={{ border: '10px solid white' }}></iframe>
    </section> 
    </Layout> 
    </>
  )
}
