import { connect } from 'react-redux'
import {markDone, State} from '../reducers/todos'
import TodosList from '../components/TodoItems/TodoList'
import { getTodos } from '../selectors/todos'

const mapStateToProps = (state: State) => ({
    ...state
})

const mapDispatchToProps = {
    Clicked: markDone,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)
