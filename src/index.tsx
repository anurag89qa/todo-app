import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './components/App';
import './index.scss';
import store from './store/Store'

ReactDOM.render(
  <Provider store={store}>
     <div>
     < App />
    </div>
  </Provider> ,
  document.getElementById('root') as HTMLElement,
);
