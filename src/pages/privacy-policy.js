import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function PrivacyPolicy () {
    return (
        <Layout>
            <div>
                <h1>Privacy Policy</h1>
                <h2>Website</h2>
      <p>
         This website has been created with the purpose to showcase work by
         Nick Azzarello. This website does not collect any information, data, or
         cookies.
      </p>

      <hr />
      
      <h2>Alexa Skills</h2>

      <h3>General</h3>
      <p>
         This Privacy Policy describes how I (Nick Azzarello) protect your
         privacy and data. Before using any of my Alexa Skills, please
         take a moment to read this policy and my <Link to="/terms-of-use">Terms of Use</Link> page for
         Alexa Skills, as well as the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">
         Amazon Privacy Notice</a> and the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201809740" target="_blank" rel="noopener noreferrer">
         Alexa Terms of Use</a> by the Amazon Digital Services LLC.
      </p>
      <p>
        Regarding Amazon, “Alexa” means their Alexa Voice Service which includes
        third party services (like my skills) and other related software.
      </p>
      <p>
        If you use one of my skills you fully agree to this Privacy Policy.
      </p>
      <p>
        When you use my skills you have to talk to Alexa. This voice input is
        sent to Amazon's Cloud service and uses it to understand what my skill should
        do for you in response to your request. This is absolutely necessary for
        my skill to give you an appropriate answer.
      </p>

      <h3>Data</h3>
      <p>
        I never collect or share personal data with my skills.
      </p>
      <p>
        To improve my service, I analyze how often utterances
        are spoken and other analytics through an analytics page on Amazon's
        Alexa Developer Console page. I also read any commented reviews on skills
        in case any need attention for improvements
      </p>
      <p>
        For some of my skills, it is necessary to save data for you in a database.
        Usually this would be for skills that have in-purchase options from a skill.
        This would keep a record of what you may have purchase but does not share
        your personal information through me at all.
      </p>

      <h3>Changes</h3>
      <p>
        My skills or parts of it may change or be updated at any time.
        Further, this Privacy Policy might change.  Your continued use of my
        skill after changes of the Privacy Policy or the skill itself will be seen as your acceptance of both.
      </p>
            </div>
        </Layout>
    )
}
