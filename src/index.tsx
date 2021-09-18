import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

/**
 * Criado mock server com miragejs
 */
createServer({
  models: {
    transaction: Model, // define uma entidade dentro do database (screma)
  },

  routes() {
    this.namespace = 'api'; // basepoint que será interceptado

    this.get('/transactions', () => { // endpoint e seu respectivo retorno
      return this.schema.all('transaction'); // retorna todas as transactions do database (schema)
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transcation', data); // cria uma transaction no database (schema)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
