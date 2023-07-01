import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './AboutMe.module.scss'

const AboutMe: React.FC = () => {
	return (
		<NavLink to='/' className={classes.navAboutMe}>
			<div className={classes.aboutMeElement}>
				<div className={classes.arrowIcon}></div>
				Обо мне
			</div>
		</NavLink>
	)
}

export default AboutMe
