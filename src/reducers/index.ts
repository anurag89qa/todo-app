import { combineReducers } from 'redux'
import todos, {State} from './todos'


export interface Todo {
    id: number;
    name: string;
    done: boolean
    completed:boolean;
}

const reducer = combineReducers<State>({
    todos
});

export default reducer;
