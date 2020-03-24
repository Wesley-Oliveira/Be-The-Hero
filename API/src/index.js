import express from 'express';
import cors  from 'cors';
import routes from './routes';

const app = express();

app.use(cors(/*{
    origin: 'endereço da aplicação online que pode requisitar algo'
}*/));
app.use(express.json());
app.use(routes);

/**
 * Para trabalhar com Query Builder:
 * Instalar o knex;
 * Instalar o Driver do SGBD, no caso sqlite3
 * 
 * Para iniciar npx knex init
 * 
 * Para criar a migration com knex:
 *  npx knex migrate:make create_nome_tabela
 * 
 * Para rodar a migration:
 *  npx knex migrate:latest
 * 
 * Para desfazer migrations:
 *  npx knex migrate:rollback
 */



app.listen(3333);