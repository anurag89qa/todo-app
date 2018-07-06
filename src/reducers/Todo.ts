import { Action, ActionTypes } from '../actions/todos'

export interface Todo {
    id: number;
    name: string;
    done: boolean
}

export interface State {
    todos: Todo[]
}

export const initialState: State = {
    todos: [],
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {

        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo

            return {
                ...state,
                todos: [...state.todos, todo], // Add todo to todos array
            }
        }

        case ActionTypes.MARK_DONE: {
            const { rowid } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === rowid ? { ...todo, done: !todo.done } : todo),
            }
        }

        default:
            return state
    }
}
