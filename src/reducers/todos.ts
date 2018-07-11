import actionCreatorFactory from "typescript-fsa";
import {reducerWithInitialState} from "typescript-fsa-reducers";
import {map, filter, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {Epic} from "redux-observable";

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



//---- Actions--------------- //

const ADD_TODO = 'todo_app/todos/ADD_TODO';
const MARK_DONE = 'todo_app/todos/MARK_DONE';
const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<string>(ADD_TODO);
export const markDone = actionCreator<number>(MARK_DONE);



//---- Reducers--------//


const reducer = reducerWithInitialState([])
    .case(addTodo, (state, text) => ([ ...state, {done: false, id: nextId++, name: text, completed: false}]))
    .case(markDone, (state, rowid) => (state.map((todo) => (todo.id === rowid ? {...todo, done: !todo.done} : todo))))


export default reducer;



//---- Epics--------------- //

//
// const API_BASE_URL = "http://localhost:8000/api/1";
//
// export const fetchTodoFromServerEpic: Epic = (action$) => action$.pipe(filter(fetchTodo.started.match), mergeMap(action =>
//         ajax.get(API_BASE_URL + '/').pipe(
//             map(response => fetchTodo.done({result: response.response})),
//             catchError((error, caught) => of(fetchTodo.failed({error: error})))
//         )
//     )
// );
//
// export const addTodoToServerEpic: Epic = (action$) => action$.pipe(filter(addTodo.started.match), mergeMap(action =>
//         ajax.put(API_BASE_URL + '/todo').pipe(
//             map(response => addTodo.done({result: response.response})),
//             catchError((error, caught) => of(addTodo.failed({error: error})))
//         )
//     )
// );
//
// export const toggleTodoToServerEpic: Epic = (action$) => action$.pipe(filter(toggleTodo.started.match), mergeMap(action =>
//         ajax.post(API_BASE_URL + '/todo/' + action.payload + '/toggle').pipe(
//             map(response => toggleTodo.done({params: action.payload, result: response.response.completed})),
//             catchError((error, caught) => of(toggleTodo.failed({params: action.payload, error: error})))
//         )
//     )
// );