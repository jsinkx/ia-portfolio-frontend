import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'
import classes from './Login.module.scss'

const Login = () => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()

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

	const onSubmit = async (values) => {
		const data = await dispatch(fetchAuth(values))

		if (!data.payload) {
			return alert('Не удалось авторизоваться')
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		} else {
			alert('Не удалось авторизоваться')
		}
	}

	if (isAuth) return <Navigate to='/' />

	return (
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
					}}
				>
					Войти
				</Button>
			</form>
		</div>
	)
}

export default Login
