import 'dotenv/config';
import { Request, Response } from 'express';
import { mysqlConnection } from './mysql';
import routes from './routes';

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const corsOptions = {
  origin: '*',
};

mysqlConnection.connect()

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is using mySQL
app.use('/', routes)


app.use('/test', (request: Request, response: Response) => {
  return response.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
