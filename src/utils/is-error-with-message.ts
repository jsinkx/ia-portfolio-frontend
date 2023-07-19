type ResponseDataMessage = {
	location: string
	msg: string
	param: string
	value: string
}

type ErrorWithMessage = {
	status: number
	data: ResponseDataMessage[]
}

// Returns true if error rejected from server and has data
const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
	return (
		typeof error === 'object' &&
		error !== null &&
		'data' in error &&
		typeof (error as Record<string, unknown>).data === 'object'
	)
}

export default isErrorWithMessage
