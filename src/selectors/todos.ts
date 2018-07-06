import { createSelector } from 'reselect'
import { State } from '../reducers'

const getTodosState = ((state: State) => state.todos)

export const getTodos = createSelector([getTodosState], s => s.todos)
