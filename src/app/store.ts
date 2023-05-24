import { configureStore } from "@reduxjs/toolkit"
import { todoListReducer } from "../features/todo-list/todoListSlice"

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
