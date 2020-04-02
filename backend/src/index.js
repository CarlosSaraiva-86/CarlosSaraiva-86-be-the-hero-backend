const express = require('express');
const cors  = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
Tipos de parametros:
*
* Query Params: Parametros nomeados enviados na rota após  "?" (Filtros, paginação)
* Route Params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisição utilizado para criar ou alterar objetos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select(*)
  */


