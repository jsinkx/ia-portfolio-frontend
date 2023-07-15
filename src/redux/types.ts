import store from './store'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Response on any mutation action, POST, PATCH, DELETE
export type ApiStatusResponse = { success: boolean } | { message: string }
