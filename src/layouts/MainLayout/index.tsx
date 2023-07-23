import React from 'react'
import { Helmet } from 'react-helmet'

import { DEFAULT_KEYWORDS, ICON_LOGO_URL, SERVER_URL } from '../../shared/constants'

import Header from '../../components/Header'
import Notifications from '../../components/Notifications'

import 'react-toastify/dist/ReactToastify.css'
import StyledContent from './style'

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
	const _title = `${(title && title.concat(' - ')) || ''}Илья Аленичев`
	const _description = `Сайт-портфолио индивидуальных достижений Ильи Аленичева. ${description}`
	const _image = SERVER_URL + image || ICON_LOGO_URL

	return (
		<>
			<Helmet>
				<title> {_title} </title>
				<meta name="description" content={_description} />
				<meta name="keywords" content={[...DEFAULT_KEYWORDS, ...keywords].join(', ')} />
				<meta property="og:title" content={title || _title} />
				<meta property="og:site_name" content="Илья Аленичев" />
				<meta property="og:description" content={_description} />
				<meta property="og:image" content={_image} />
				<meta itemProp="image" content={_image} />
				<link rel="image_src" href={_image} />
			</Helmet>
			<Notifications />
			<Header />
			<StyledContent>{children}</StyledContent>
		</>
	)
}

export default MainLayout
