import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import ProgrammStoreService from './data-base/data-base'

import {ProgrammContextProvider} from './components/program-context'
import './index.scss';

import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'

const programmStoreService = new ProgrammStoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ProgrammContextProvider value={programmStoreService}>
                <Router>
                    <App/>
                </Router>
            </ProgrammContextProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'))