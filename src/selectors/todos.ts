import { createSelector } from 'reselect'
import {State} from "../reducers/todos";


const getTodosState = ((state: State) => state.todos)

export const getTodos = createSelector([getTodosState], a => a);

