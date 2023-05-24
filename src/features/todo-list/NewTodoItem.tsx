import { useState } from "react"

import { useDispatch } from "react-redux"
import { addTodo } from "./todoListSlice"

export function NewTodoItem() {
  const [todoText, setTodoText] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <input
        type={"text"}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button onClick={() => dispatch(addTodo(todoText))}>Add todo</button>
    </div>
  )
}
