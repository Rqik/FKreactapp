import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './components/app'
import ErrorBoundary from './components/error-boundary'
import ProgramStoreService from './store/data-base/data-base'

import {ProgramContext} from './program-context'
import './index.scss';

import store from './store/store'
import {BrowserRouter} from 'react-router-dom'

const programStoreService = new ProgramStoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ProgramContext.Provider value={programStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ProgramContext.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)