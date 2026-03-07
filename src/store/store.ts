import { configureStore } from '@reduxjs/toolkit'
import counter from "../feature/increment/counter.slice.ts"

export const store = configureStore({
  reducer: {
    counter: counter,
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
