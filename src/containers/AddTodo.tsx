import { connect } from 'react-redux'
import {addTodo } from '../reducers/todos'
import AddTodoForm from '../components/AddForm/AddTodoForm'

export default connect<any, any, any>(null, {
  handleSubmit: addTodo,
})(AddTodoForm)
