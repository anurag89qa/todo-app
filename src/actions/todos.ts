
let nextId = 0

export interface Todo {
    id: number;
    name: string;
    done: boolean
}

export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    MARK_DONE = 'MARK_DONE',
}

export interface AddTodoAction {

    type: ActionTypes.ADD_TODO,
    payload: { todo: Todo }
}

export interface MarkDone {

    type: ActionTypes.MARK_DONE,
    payload: { rowid: number }
}

export function AddTodo(text: string): AddTodoAction {
    return {
        payload: {
            todo: {
                done: false,
                id: nextId++,
                name: text,
            },
        },
        type: ActionTypes.ADD_TODO,
    }
}
export function MarkDone(rowid: number): MarkDone {
        return {
            payload: {rowid},
            type: ActionTypes.MARK_DONE,
        }
  }

export type Action = AddTodoAction | MarkDone
