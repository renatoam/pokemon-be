import 'dotenv/config';
import express, { Request, Response } from 'express';
import routes from './routes';

import cors from 'cors';

const app = express();
const port = 8080;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.use('/test', (request: Request, response: Response) => {
  return response.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
