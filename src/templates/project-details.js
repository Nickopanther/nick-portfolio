import React from 'react'
import SEO from "../components/SEO"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark;
    const { title, summary, description, skillImage, cta } = data.markdownRemark.frontmatter;

    return (
        <>
        <SEO title={title} description={description} />
        <Layout>
            <div className={styles.alexaSkill}>
                <div className={styles.featured}>
                    <Img fixed={skillImage.childImageSharp.fixed} />
                </div>
                <div className={styles.details}>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                    <a className={styles.btn} href={cta}  rel="noreferrer" target="_blank">
                        Get Skill
                    </a>
                </div>  
            </div>
            <div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}} />
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark (frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
        description
        summary    
        title
        cta
        skillImage {
            childImageSharp {
            fixed(width: 300) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    }       
    }
`
