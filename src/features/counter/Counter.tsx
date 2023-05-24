import { increment, incrementBy, counterSelector } from "./counterSlice"
import styles from "./Counter.module.css"
import { useDispatch, useSelector } from "react-redux"

export function Counter() {
  const count = useSelector(counterSelector)
  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementBy(2))}
        >
          Increment by 2
        </button>
      </div>
    </>
  )
}
