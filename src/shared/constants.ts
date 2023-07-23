export const IS_PROD = process.env.NODE_ENV === 'production'

export const SERVER_URL = IS_PROD
	? process.env.REACT_APP_API_URL || 'http://localhost:3333'
	: 'http://localhost:3333'

export const ICON_LOGO_URL =
	'https://cdn.discordapp.com/attachments/711557949499244588/1124375441722056825/logo.png'

export const DEFAULT_KEYWORDS = ['Илья Аленичев', 'Аленичев', 'Аленичев Портфолио', 'ilyaalenichev@gmail.com']
