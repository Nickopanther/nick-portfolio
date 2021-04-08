import React from 'react'
import SEO from "../../../components/SEO"
import Layout from '../../../components/Layout'
import { graphql, Link } from 'gatsby'
import * as styles from '../../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function AlexaSkills({ data }) {
    const projects = data.projects.nodes;

    return (
        <>
        <SEO title="Alexa Skills" description="Alexa Skills description" />
        <Layout>
        <div className={styles.portfolio}>
                <h2>Alexa Skills</h2>
                <p>A list of the many Alexa Skills I have created that are available to use on any Alexa device.
                Click on an image, or name, to learn more about a skill.</p>
                <div className={ styles.projects }>
                    { projects.map(project => (
                        <Link to={"/projects/alexa-skills/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fixed={project.frontmatter.skillImage.childImageSharp.fixed} />
                                <h2>{ project.frontmatter.title }</h2>
                            </div>
                        </Link>
                    )) }
                </div>
            </div>
        </Layout>
        </>
    )
}

// export page query
export const query = graphql `
    query AlexaSkillsPage {
        projects: allMarkdownRemark {
            nodes { 
                frontmatter {
                slug
                title
                skillImage {
                    childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                }
                id
            }
        }
    }  
`