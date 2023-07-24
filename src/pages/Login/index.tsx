import React from 'react'
import { Navigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Paths from '../../shared/paths'
import notify from '../../utils/toasty-notify'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { selectIsAuth } from '../../redux/slices/auth/selectors'
import { fetchAuth } from '../../redux/slices/auth/slice'
import { AuthLoginBody } from '../../redux/slices/auth/types'

import MainLayout from '../../layouts/MainLayout'

import StyledLogin from './style'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector(selectIsAuth)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (values: FieldValues) => {
		const data = await dispatch(fetchAuth(values as unknown as AuthLoginBody))

		if (!data.payload) {
			notify('Не удалось авторизоваться', false)
			return
		}

		if (typeof data.payload === 'object' && 'token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token as string)
		} else {
			notify('Не удалось авторизоваться', false)
		}
	}

	if (isAuth) return <Navigate to={Paths.home} />

	return (
		<MainLayout title="Авторизация">
			<StyledLogin>
				<h1 className="title">Вход в аккаунт</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						className="input__field"
						label="E-Mail"
						type="email"
						autoComplete="on"
						{...register('email', { required: 'Укажите почту' })}
						helperText={errors.email?.message}
						error={Boolean(errors.email?.message)}
					/>
					<TextField
						className="input__field"
						label="Пароль"
						type="password"
						autoComplete="on"
						{...register('password', { required: 'Введите пароль' })}
						helperText={errors.password?.message}
						error={Boolean(errors.password?.message)}
					/>
					<Button
						disabled={!isValid}
						size="large"
						variant="contained"
						type="submit"
						sx={{
							width: 150,
							backgroundColor: 'black',
						}}
					>
						Войти
					</Button>
				</form>
			</StyledLogin>
		</MainLayout>
	)
}

export default Login
