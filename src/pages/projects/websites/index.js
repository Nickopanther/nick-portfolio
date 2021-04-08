import React from 'react'
import SEO from "../../../components/SEO"
import Layout from '../../../components/Layout'
import { graphql, Link } from 'gatsby'
import * as styles from '../../../styles/projects.module.css'
//import Img from 'gatsby-image' Research this one
import AngstadtFamilyDental from '../../../images/angstadt-family-dental.png'
import BBIntegrations from '../../../images/bb-integrations.png';
import BGGlass from '../../../images/bg-glass.png';
import CherryOrthodontics from '../../../images/cherry-orthodontics.png';
import DaBrianMarketingGroup from '../../../images/dabrian.png';
import TheRubrightGroup from '../../../images/rubright.png';

const AngstadtFamilyDentalWebsitee= 'https://angstadtfamilydental.com/';
const BBIntegrationsWebsite= 'https://www.bbintegrations.com/';
const BGGlassWebsite= 'https://www.bgglass.com/';
const CherryOrthodonticsWebsite= 'https://www.cherryortho.com/';
const DaBrianMarketingGroupWebsite= 'https://www.dabrianmarketing.com/';
const TheRubrightGroupWebsite= 'https://therubrightgroup.com/';

export default function Websites() {

    const websites = [ 
        [
            `${AngstadtFamilyDentalWebsitee}`,
            'Angstadt Family Dental',
            `${AngstadtFamilyDental}`
        ],
        [
            `${BBIntegrationsWebsite}`,
            'B&B Integrations',
            `${BBIntegrations}`
        ],
        [
            `${BGGlassWebsite}`,
            'B&G Glass',
            `${BGGlass}`
        ],
        [
            `${CherryOrthodonticsWebsite}`,
            'Cherry Orthodontics',
            `${CherryOrthodontics}`
        ],
        [
            `${DaBrianMarketingGroupWebsite}`,
            'DaBrian Marketing Group, LLC',
            `${DaBrianMarketingGroup}`
        ],
        [
            `${TheRubrightGroupWebsite}`,
            'The Rubright Group',
            `${TheRubrightGroup}`
        ],
    ];

    return (
        <>
        <SEO title="Websites" description="Websites description" />
        <Layout>
            <div className={styles.portfolio}>
                <h2>Websites</h2>
                <p>Websites that I have helped build and maintain. All websites have been made on 
                WordPress with the help of the plugin, Elementor. Plugins from WPMU Dev also play 
                a role in optimization, security, and SEO. Click on an image, or title, to explore 
                a site.</p>
              
                <div className={ styles.projects }>
                    { websites.map(website => (
                            <div>
                                <a href={website[0]} target="_blank" rel="noopener noreferrer">
                                    <img src={website[2]} height="200" width="300" />
                                    <h2>{ website[1] }</h2>
                                </a>
                            </div>
                        
                    )) }
                </div>
                
            </div>
        </Layout>
        </>
    )
}
