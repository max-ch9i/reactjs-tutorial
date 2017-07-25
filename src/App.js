import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Dashboard from './components/Dashboard';

class App extends Component {
    componentWillMount() {
       this.store = createStore(reducers); 
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
