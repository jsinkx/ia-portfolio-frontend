import { Id, ToastOptions, toast } from 'react-toastify'

import Colors from '../shared/colors'

type NotifyFunc = (message: string, success?: boolean) => Id

const notify: NotifyFunc = (message, success = true) => {
	return (success ? toast.success : toast.error)(message, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		style: { border: `1.5px solid ${success ? Colors.SUCCESS : Colors.ERROR}`, zIndex: '0' },
	} as unknown as ToastOptions<{}>)
}

export default notify
