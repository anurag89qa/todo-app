import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import * as moment from 'moment'
import * as React from 'react'
import * as style from './TodoList.scss'

export interface Todo {
    id: number;
    name: string;
    done: boolean
    completed:boolean;
}

export enum VISIBILITY_FILTER { ALL, ACTIVE, COMPLETED };

interface Props {
    todos: Todo[]
    Clicked: (todoId: number) => void
    handleDelete: (todoId: number) => void
    filter: VISIBILITY_FILTER
}
interface State {

}

export default class TodoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    public handleDelete(id: number) {
        console.log("Times")
    }

    public render() {
        const { todos, filter, Clicked } = this.props;
        console.log(todos);
        console.log(filter);
        const filteredTodo = todos.filter((todo) => {
            if(filter === VISIBILITY_FILTER.ALL) {
                return true;
            }
            else if(filter === VISIBILITY_FILTER.ACTIVE) {
                return !todo.completed;
            }
            else if(filter === VISIBILITY_FILTER.COMPLETED) {
                return todo.completed;
            }
        });
        const date = moment().format("MMM Do YYYY h:mm a");
        console.log(filteredTodo)
        return (
            <div className="data-container">
                <ul>
                    {
                        filteredTodo.map(todo => (
                            <div key={todo.id}
                                 onClick={() => Clicked(todo.id)}
                                 style={{ textDecoration: `${todo.done ? 'line-through' : ''}` }}>
                                <title> </title>
                                <AppBar position="static" color="default">
                                    <Toolbar>
                                        <Typography variant="title" color="inherit">
                                            <ListItem>
                                                <ListItemText primary={todo.name} secondary={date} />
                                            </ListItem>
                                        </Typography>
                                        <div className= {style.deleteButton}>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </Toolbar>
                                </AppBar> <br/>
                            </div>),
                        )
                    }
                </ul>
            </div>
        )
    }
}
