import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function TermsOfUse () {
    return (
        <Layout>
            <div>

            <h1>Terms of Use</h1>

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
        The Terms of Use is an agreement between you and I (Nick Azzarello).
        Before using any of my Alexa Skills, please
        take a moment to read this policy and my <Link to="/privacy-policy">Privacy Policy</Link> page for
        Alexa Skills, as well as the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">
        Amazon Privacy Notice</a> and the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201809740" target="_blank" rel="noopener noreferrer">
        Alexa Terms of Use</a> by the Amazon Digital Services LLC.
      </p>
      <p>
        Regarding Amazon, “Alexa” means their Alexa Voice Service which includes
        third party services (like my skills) and other related software.
      </p>
      <p>
        If you use one of my skills you fully agree to this Terms of Use.
      </p>

      <h3>Disclaimer</h3>
      <p>
        My skills or parts of it may discontinue at any time or might contain
        errors. You use mmy skills on your own acountability and responsibility.
        Any information should not be seen as an advice.
      </p>
    

      <h3>Changes</h3>
      <p>
        My skills or parts of it may change or be updated at any time. Further,
        this Terms of Use page might change. Your continued use of my skill after
        changes of the Terms of Use or the skill itself will be seen as your
        acceptance of both.
      </p>

      <h3>For You</h3>
      <p>
        I am always trying my best to develop high quality and engaging content
        for new and returning customers who enjoy using Alexa.
      </p>
      
    </div>
        </Layout>
    )
}
