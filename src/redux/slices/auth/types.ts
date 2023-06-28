import Status from '../../../shared/status'

export type AuthLoginThunk = {
	email: string
	password: string
}

export type User = {
	_id: string
	fullName: string
	email: string
	createdAt: string
	updatedAt: string
	__v: number
	passwordHash?: string
	token?: string
}

type AuthError =
	| {
			msg: string
			param: string
			location: string
			value?: string
	  }
	| { message: string }

export type AuthData = null | AuthError | User

export interface IAuthState {
	data: AuthData
	status: Status
}
