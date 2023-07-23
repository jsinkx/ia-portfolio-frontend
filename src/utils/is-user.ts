import { User } from '../redux/slices/auth/types'

const isUser = (t: any): t is User => t?._id

export default isUser
