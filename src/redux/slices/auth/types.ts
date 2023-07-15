import Status from '../../../shared/status'

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

export type AuthLoginBody = {
	email: string
	password: string
}

type AuthError =
	| {
			msg: string
			param: string
			location: string
			value?: string
	  }
	| { message: string }

export type AuthResponse = AuthError | User

export interface IAuthState {
	data: AuthResponse | null
	status: Status
}
