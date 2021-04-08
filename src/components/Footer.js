import React from 'react';
import { Link } from 'gatsby'

export default function Footer () {

    const today = new Date()
    const year = today.getFullYear()

    return ( 
        <footer>
            <p>&copy; { year } Nick Azzarello, All rights reserved 
            | <Link to="/terms-of-use">Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link></p>
        </footer>
     );
}
