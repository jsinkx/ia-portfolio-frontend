import React from 'react'

import classes from '../../assets/styles/pages/Home/Socials.module.scss'

const Socials: React.FC = () => {
	return (
		<section className={classes.socialSection}>
			<p className={classes.pTitle}> ТАКЖЕ ЕСТЬ </p>
			<div className={classes.socialGroup}>
				<a href='https://t.me/ilyaalenichev' rel='noreferrer' target='_blank' className={classes.socTg}>
					<div className={classes.socialBox}> </div>
				</a>
				<a href='https://wa.me/79260005005' rel='noreferrer' target='_blank' className={classes.socWhatsApp}>
					<div className={classes.socialBox}> </div>
				</a>
			</div>
		</section>
	)
}

export default Socials
