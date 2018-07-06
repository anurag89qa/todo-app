import * as React from 'react';
import { shallow } from "enzyme";
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from '../src/components/App';
import store from '../src/store/Store'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})