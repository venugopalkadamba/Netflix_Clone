import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css"


function Footer() {
    return (
        <div className="footer">

            <center>
            <div className="social-icons" >
                <a href="https://github.com/venugopalkadamba" target="_blank"><GitHubIcon className="github-icon" /></a>
                <a href="https://linkedin.com/in/venugopalkadamba" target="_blank"><LinkedInIcon className="linkedin-icon" /></a>
            </div>

            <h3 className="about-text">Made with <span className="heart-symbol">&#10084;</span> by Venu Gopal Kadamba</h3>
            </center>
        </div>
    )
}

export default Footer
