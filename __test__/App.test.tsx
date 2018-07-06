import * as React from 'react';
import { shallow } from "enzyme";
import * as ReactDOM from 'react-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import App from '../src/components/App';
import store from '../src/store/Store'

it('Render Create to Header', () => {
    const result = shallow(<App />).contains(<AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Create ToDos
            </Typography>
        </Toolbar>
    </AppBar>)
    expect(result).toBeTruthy();
})