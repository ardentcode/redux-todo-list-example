import { deleteTodo } from "./todoListSlice"
import { useDispatch } from "react-redux"

interface TodoItemProps {
  text: string
  id: number
}

export function TodoItem({ text, id }: TodoItemProps) {
  const dispatch = useDispatch()
  const onDeleteTodo = () => dispatch(deleteTodo(id))

  return (
    <div className="view">
      <label>{text}</label>{" "}
      <button className="destroy" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}
