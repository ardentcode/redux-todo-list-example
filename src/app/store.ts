import { configureStore } from "@reduxjs/toolkit"
import { todoListReducer } from "../features/todo-list/todoListSlice"
import { counterReducer } from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
