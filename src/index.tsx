import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

/**
 * Criado mock server com miragejs
 */
createServer({
  routes() {
    this.namespace = 'api'; // basepoint que será interceptado

    this.get('/transactions', () => { // endpoint e seu respectivo retorno
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
