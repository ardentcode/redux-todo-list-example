import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface TodoListState {
  todos: string[]
}

const initialState: TodoListState = {
  todos: [],
}

export const todoListSlice = createSlice({
  name: "todo-list",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
    },
  },
})

export const { addTodo, deleteTodo } = todoListSlice.actions

export const todoListSelector = (state: RootState) => state.todoList.todos
export const todoListReducer = todoListSlice.reducer
