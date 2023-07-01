import React from 'react'
import { Helmet } from 'react-helmet'

import defaultKeywords from '../shared/defaultKeywords'
import config from '../shared/config'

type MainLayoutProps = {
	title?: string
	description?: string
	keywords?: string[]
	image?: string
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({
	title,
	description = '',
	keywords = [],
	image,
	children,
}) => {
	const _title = `${title?.concat(' - ') || ''}Илья Аленичев`
	const _description = `Сайт-портфолио индивидуальных достижений Ильи Аленичева. ${description}`
	const _image = image || config.mainLogoAddress

	return (
		<>
			<Helmet>
				<title> {_title} </title>
				<meta name='description' content={_description} />
				<meta name='keywords' content={[...defaultKeywords, ...keywords].join(', ')} />
				<meta property='og:title' content={title || _title} />
				<meta property='og:site_name' content='Илья Аленичев' />
				<meta property='og:description' content={_description} />
				<meta property='og:image' content={_image} />
				<meta itemProp='image' content={_image} />
				<link rel='image_src' href={_image} />
			</Helmet>
			{children}
		</>
	)
}

export default MainLayout