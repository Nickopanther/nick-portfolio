import React from 'react'
import SEO from "../../components/SEO"
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects() {
    return (
        <>
        <SEO title="Projects" description="Projects description" />
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects</h1>
            </div>
        </Layout>
        </>
    )
}
