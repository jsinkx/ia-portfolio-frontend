import React from 'react'
import { Navigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { AuthLoginThunk } from '../../redux/slices/auth/types'
import { selectIsAuth } from '../../redux/slices/auth/selectors'
import { fetchAuth } from '../../redux/slices/auth/auth'

import classes from './Login.module.scss'
import MainLayout from '../../layouts/MainLayout'

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
		const data = await dispatch(fetchAuth(values as unknown as AuthLoginThunk))

		if (!data.payload) {
			return alert('Не удалось авторизоваться')
		}

		if (typeof data.payload === 'object' && 'token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token as string)
		} else {
			alert('Не удалось авторизоваться')
		}
	}

	if (isAuth) return <Navigate to='/' />

	return (
		<MainLayout title='Авторизация'>
			<div className={classes.loginBox}>
				<h2 className={classes.title}>Вход в аккаунт</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						className={classes.field}
						label='E-Mail'
						type='email'
						error={Boolean(errors.email?.message)}
						helperText={errors.email?.message}
						{...register('email', { required: 'Укажите почту' })}
					/>
					<TextField
						className={classes.field}
						label='Пароль'
						type='password'
						{...register('password', { required: 'Введите пароль' })}
						helperText={errors.password?.message}
						error={Boolean(errors.password?.message)}
					/>
					<Button
						disabled={!isValid}
						size='large'
						variant='contained'
						type='submit'
						sx={{
							width: 150,
							backgroundColor: 'black',
						}}>
						Войти
					</Button>
				</form>
			</div>
		</MainLayout>
	)
}

export default Login
