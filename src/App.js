import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppRouter from './components/router/AppRouter';
import { tokenSignIn } from './actions/signIn';
import { ApolloProvider } from 'react-apollo';
import Client from './apollo/Client';

const store = configStore();

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    store.dispatch(tokenSignIn(token));
  }
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={Client}>
          <AppRouter />
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
