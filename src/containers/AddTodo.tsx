import { connect } from 'react-redux'
import { AddTodo } from '../actions/todos'
import AddTodoForm from '../components/AddForm/AddTodoForm'

export default connect<any, any, any>(null, {
  handleSubmit: AddTodo,
})(AddTodoForm)
