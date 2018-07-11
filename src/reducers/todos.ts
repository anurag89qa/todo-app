import actionCreatorFactory from "typescript-fsa";
import {reducerWithInitialState} from "typescript-fsa-reducers";

let nextId = 0;

export interface Todo {
     id: number;
     name: string;
     done: boolean
     completed: boolean
 }

export interface State {
     todos: Todo[]
}

const ADD_TODO = 'todo_app/todos/ADD_TODO';
const MARK_DONE = 'todo_app/todos/MARK_DONE';
const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<string>(ADD_TODO);
export const markDone = actionCreator<number>(MARK_DONE);

const reducer = reducerWithInitialState([])
    .case(addTodo, (state, text) => ([ ...state, {done: false, id: nextId++, name: text, completed: false}]))
    .case(markDone, (state, rowid) => (state.map((todo) => (todo.id === rowid ? {...todo, done: !todo.done} : todo))))

export default reducer;

