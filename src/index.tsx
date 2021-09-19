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

  seeds(server) { // inserindo dados na inicialização dos dados
    server.db.loadData({
      transactions: [ // dou o mesmo nome do modelo só que em seu plural
        {
          id: 1,
          title: "Freelance de webseite",
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createAt: new Date('2021-02-12 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'; // basepoint que será interceptado

    this.get('/transactions', () => { // endpoint e seu respectivo retorno
      return this.schema.all('transaction'); // retorna todas as transactions do database (schema)
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data); // cria uma transaction no database (schema)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
