import React from 'react'

import classes from '../../assets/styles/pages/Home/AboutMe.module.scss'

const AboutMe: React.FC = () => {
	return (
		<button className={classes.navAboutMe}>
			<div className={classes.aboutMeElement}>
				<div className={classes.arrowIcon}></div>
				Обо мне
			</div>
		</button>
	)
}

export default AboutMe
