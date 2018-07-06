import { connect } from 'react-redux'
import { MarkDone } from '../actions/todos'
import TodosList from '../components/TodoItems/TodoList'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state),
})

const mapDispatchToProps = {
    Clicked: MarkDone,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)
