import styles from "../todo-list/TodoList.module.css"
import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import { NewTodoItem } from "./NewTodoItem"
import { RootState } from "../../app/store"

export function TodoList() {
  const todos = useSelector((state: RootState) => state.todoList.todos)

  return (
    <div className={styles.row}>
      <NewTodoItem />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem text={todo} id={index} />
          </li>
        ))}
      </ul>
    </div>
  )
}
