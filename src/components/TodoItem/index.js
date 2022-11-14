// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteTodoItem} = props
  const {title, id} = todoItem
  const onDelete = () => {
    onDeleteTodoItem(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
