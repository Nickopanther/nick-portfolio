import React from 'react'
import SEO from "../../components/SEO"
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const DemoReelVideo = "https://www.youtube.com/embed/57pngVgjQhE";
const InternshipAtTCMotionVideo = "https://www.youtube.com/embed/GD4s7KgjuOc";
const NoOneCameToMyPartyVideo = "https://www.youtube.com/embed/-cRZVE2psU0";
const ForDummiesVideo = "https://www.youtube.com/embed/auZyWrzzNgs";
const TheMonkeysPawVideo = "https://www.youtube.com/embed/2-brSKzN7jg";
const InsideShortFilmVideo = "https://www.youtube.com/embed/yn2829sXOAc";
const CameraOneVideo = "https://www.youtube.com/embed/kWert-LdWs0";
const BerksLanesVideo = "https://www.youtube.com/embed/wdGWJGG_vtg";
const YoungOnesVideo = "https://www.youtube.com/embed/i0lpGMEPqNk";
const COCAOneVideo = "https://www.youtube.com/embed/xW5AW7klBQ";
const COCATwoVideo = "https://www.youtube.com/embed/9mKueWqrO8M";
const CherryOrthodonticsVideo = "https://www.youtube.com/embed/ch52ecw8Jng";
const DentistRoleplayVideo = "https://www.youtube.com/embed/9LKEgndlmEA";
const CashierStorytimeVideo = "https://www.youtube.com/embed/hr28UNnvGho";
const WaitressRoleplayVideo = "https://www.youtube.com/embed/nnDtuNhpzGI";

const DemoReelTitle = "Demo Reel";
const InternshipAtTCMotionTitle = "Internship at TC Motion";
const NoOneCameToMyPartyTitle = "No One Came to my Party";
const ForDummiesTitle = "For Dummies";
const TheMonkeysPawTitle = "The Monkey's Paw (Audio Reading)";
const InsideShortFilmTitle = "Inside (Short Film)";
const CameraOneTitle = "KUTV's Camera One (Segues)";
const BerksLanesTitle = "Berks Lanes";
const YoungOnesTitle = "Young Ones";
const COCAOneTitle = "COCA (Package #1)";
const COCATwoTitle = "COCA (Package #1)";
const CherryOrthodonticsTitle = "Cherry Orthodontics (Package)";
const DentistRoleplayTitle = "Dentist Roleplay";
const CashierStorytimeTitle = "Cashier Roleplay";
const WaitressRoleplayTitle = "Waitress Roleplay";



export default function Videos() {

    const KUVideos = [ 
        [
            `${DemoReelVideo}`,
            `${DemoReelTitle}`
        ],
        [
            `${InternshipAtTCMotionVideo}`,
            `${InternshipAtTCMotionTitle}`
        ],
        [
            `${NoOneCameToMyPartyVideo}`,
            `${NoOneCameToMyPartyTitle}`
        ],
        [
            `${ForDummiesVideo}`,
            `${ForDummiesTitle}`
        ],
        [
            `${TheMonkeysPawVideo}`,
            `${TheMonkeysPawTitle}`
        ],
        [
            `${InsideShortFilmVideo}`,
            `${InsideShortFilmTitle}`
        ],
        [
            `${CameraOneVideo}`,
            `${CameraOneTitle}`
        ],
        [
            `${BerksLanesVideo}`,
            `${BerksLanesTitle}`
        ],
        [
            `${YoungOnesVideo}`,
            `${YoungOnesTitle}`
        ],
    ];

    const ClientVideos = [ 
        [
            `${COCAOneVideo}`,
            `${COCAOneTitle}`
        ],
        [
            `${COCATwoVideo}`,
            `${COCATwoTitle}`
        ],
        [
            `${CherryOrthodonticsVideo}`,
            `${CherryOrthodonticsTitle}`
        ],
    ];

    const ASMRAlexaVideos = [ 
        [
            `${DentistRoleplayVideo}`,
            `${DentistRoleplayTitle}`
        ],
        [
            `${CashierStorytimeVideo}`,
            `${CashierStorytimeTitle}`
        ],
        [
            `${WaitressRoleplayVideo}`,
            `${WaitressRoleplayTitle}`
        ],
    ];

    return (
        <>
        <SEO title="Videos" description="Videos description" />
        <Layout>
            <div className={styles.portfolio}>
                <h1>Videos</h1>
                <p>Video production has always been a passion of mine. I enjoy 
                every aspect of it. From pre-production to post production, it 
                is very rewarding to take an idea and watch it turn into something 
                special for everyone to see. I majored with a bachelor's in Electronic 
                Media, at Kutztown University, and gained more knowledge and skills 
                with my craft. I have had the pleasure to work as PA for a video 
                production company, work as a camera operator for my local sport 
                teams, and create my own video production work. Below are videos 
                of what I have done at Kutztown University, my jobs, and demonstration 
                videos for my Alexa Skills.</p>
                
                <h2>Kutztown University</h2>
                <p>At Kutztown University I have made numerous video projects with the knowledge 
                based off what I learned from my classes. I had the chance to write, shoot, and 
                edit many projects and helped out on other projects.</p>
                <div className={ styles.projects }>
                    { KUVideos.map(KUVideo => (
                        <div>
                            <iframe width="343" height="193" src={ KUVideo[0]} 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen title={ KUVideo[1]} style={{border: '10px solid white'}}></iframe>
                            <h3>{ KUVideo[1] }</h3>
                        </div>
                    )) }
                </div>

                <hr />

                <h2>Clients for a Digital Marketing Agency</h2>
                <p>Here are videos I've made for clients at a digital marketing company. I was in charge 
                of shooting, audio, and editing the entire project. Each video was a one man shoot.</p>
                <div className={ styles.projects }>
                    { ClientVideos.map(ClientVideo => (
                        <div>
                            <iframe width="343" height="193" src={ ClientVideo[0]} 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen title={ ClientVideo[1]} style={{border: '10px solid white'}}></iframe>
                            <h3>{ ClientVideo[1] }</h3>
                        </div>
                    )) }
                </div>

                <hr />

                <h2>ASMR on Alexa</h2>
                <p>Sit back, relax, and enjoy some ASMR soothing sensations from an Alexa device. 
                <a href="https://www.youtube.com/channel/UCmxCLLE0iMbtv0SJMfWdPbA/featured" target="_blank" rel="noopener noreferrer">
                Subscribe</a> to the channel for more videos.</p>
                <div className={ styles.projects }>
                    { ASMRAlexaVideos.map(ASMRAlexaVideo => (
                        <div>
                            <iframe width="343" height="193" src={ ASMRAlexaVideo[0]} 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen title={ ASMRAlexaVideo[1]} style={{border: '10px solid white'}}></iframe>
                            <h3>{ ASMRAlexaVideo[1] }</h3>
                        </div>
                    )) }
                </div>

            </div>
        </Layout>
        </>
    )
}
