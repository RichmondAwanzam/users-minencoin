import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from '../store/configure'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const store = configureStore();




it('renders without crashing', () => {
  const div = document.createElement('div');


  const render = Component => {
    ReactDOM.render(<Provider store={store}>
                        <MuiThemeProvider>
                            <Component />
                        </MuiThemeProvider>
                    </Provider>
        , div);
}

render(App);
  ReactDOM.unmountComponentAtNode(div);
});
