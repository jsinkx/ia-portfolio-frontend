import { Post } from '../../../slices/post/types'

export type CreatePostBody = Pick<Post, 'title' | 'text' | 'backgroundImageUrl' | 'images'>

export type UpdatePostBody = { id: string } & { fields: CreatePostBody }
