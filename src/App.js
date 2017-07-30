import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Dashboard from './components/Dashboard';
// Task 6. import a load catalog action creator

class App extends Component {
    componentWillMount() {
       this.store = createStore(reducers,
           applyMiddleware(thunkMiddleware)
       );
    }
    componentDidMount() {
        /*
         * Task 6. Load a catalog from the url
         *
         * TODO: 1. Dispatch loadCatalog with the url to get the catalog from
         *
         *          http://beta.json-generator.com/api/json/get/VyuWWCrUm
         *
         *       this.store.dispatch(loadCatalog(url));
         */
    }
    render() {
        return (
            <Provider store={this.store}>
                <Dashboard/>
            </Provider>
        );
    }
}

export default App;











































/*
 * Solution to Task 6:
 *      this.store.dispatch(loadCatalog('http://beta.json-generator.com/api/json/get/VyuWWCrUm'));
 */
