import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const store = configureStore();

const render = Component => {
    ReactDOM.render(<Provider store={store}>
                        <MuiThemeProvider>
                            <Component />
                        </MuiThemeProvider>
                    </Provider>
        , document.getElementById('root'));
}
render(App)
registerServiceWorker();
