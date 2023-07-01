import React from 'react'

import classes from './Intro.module.scss'

const Intro: React.FC = () => {
	return (
		<section className={classes.introSection}>
			<p className={classes.pTitle}> ВСТУПЛЕНИЕ </p>
			<h2 className={classes.h2Greetings}> Аленичев Илья Владимирович </h2>
			<h3 className={classes.h3JobPosition}> Member of Rosatom Junior Council </h3>
		</section>
	)
}

export default Intro
