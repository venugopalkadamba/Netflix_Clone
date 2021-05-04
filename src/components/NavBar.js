import React, { useEffect, useState } from 'react'
import "../styles/NavBar.css"

const AVATAR_IMAGE_PATH = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
const NETFLIX_LOGO_PATH = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false)
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        }
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>

            <img className="nav_logo"
                src={`${NETFLIX_LOGO_PATH}`}
                alt="Netflix Logo"
            />

            <img className="nav_avatar"
                src={`${AVATAR_IMAGE_PATH}`}
                alt="Netflix Logo"
            />
            
        </div>
    )
}

export default NavBar
