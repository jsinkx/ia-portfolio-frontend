import React from "react"
import AboutMe from "./AboutMe/AboutMe"
import Intro from "./Intro/Intro"
import classes from "./BusinessInfo.module.scss"
import Contacts from "./Contacts/Contacts"
import Socials from "./Socials/Socials"

const BusinessInfo = () => {
    return(
        <div className={classes.businessItems}>
            <Intro/>
            {/* <AboutMe/> */}
            <Contacts/>
            <Socials/>
        </div>
    )
}

export default BusinessInfo