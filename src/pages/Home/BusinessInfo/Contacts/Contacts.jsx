import React from "react"
import classes from "./Contacts.module.scss"
import emailIcon from "./../../../../assets/img/icons/email-icon.png"
import phoneIcon from "./../../../../assets/img/icons/telephone-icon.png"

const Contacts = () => {
    return(
        <section className={classes.contactsSection}>
            <p className={classes.pTitle}> КОНТАКТЫ </p>
            <div className={classes.myContacts}>
                <div>
                    <a href="tel:+79260005005"> <img className={classes.contactIcon} src={phoneIcon} alt="phone"/> +7 926 000 50 05</a>
                </div>
                <div>
                    <a href="mailto:ilyaalenichev@gmail.com">  <img className={classes.contactIcon} src={emailIcon} alt="mail" /> ilyaalenichev@gmail.com  </a>
                </div>
            </div>
        </section>
    )
}

export default Contacts