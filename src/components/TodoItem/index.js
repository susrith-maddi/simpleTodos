// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const deleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="li">
      <p>{title}</p>
      <button type="button" className="delete" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
