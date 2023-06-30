import React from 'react'
import { Helmet } from 'react-helmet'

import defaultKeywords from '../shared/defaultKeywords'

type MainLayoutProps = {
	title?: string
	description?: string
	keywords?: string[]
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, description, keywords = [], children }) => {
	return (
		<>
			<Helmet>
				<title> {title?.concat(' - ') || ''} Илья Аленичев </title>
				<meta
					name='description'
					content={`Сайт-портфолио индивидуальных достижений Ильи Аленичева. ${description}`}
				/>
				<meta name='keywords' content={[...defaultKeywords, ...keywords].join(', ')} />
			</Helmet>
			{children}
		</>
	)
}

export default MainLayout
