import Button from '@material-ui/core/Button'
import { shallow } from "enzyme";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import AddTodoForm from "../src/components/AddForm/AddTodoForm";

it("renders button", () => {
    const result = shallow(<AddTodoForm />)
        .contains(<Button variant="contained" color="primary" type="submit">
            Create ToDo
        </Button>)
    expect(result).toBeTruthy();
});