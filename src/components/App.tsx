import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import Todos from '../containers/Todos';
import * as style from './App.scss'
import {VISIBILITY_FILTER} from "./TodoItems/TodoList";

class App extends React.Component {
    public render() {
        return (
            <div className={style.App}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Create ToDos
                        </Typography>
                    </Toolbar>
                </AppBar> <br/>
                 <div>
                   <AddTodo/>
                 </div>
                 <div>
                    <Todos filter={VISIBILITY_FILTER.ALL} />
                 </div>
            </div>
        );
    }
}

export default App;
