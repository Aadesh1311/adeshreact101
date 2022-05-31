
import styles from "./todo.module.css";


export const Todo = ({ todo }) => {
    return(
    <div className={todo.completed ? styles.lineThrough: ""}>{todo.value}</div>
    )
}