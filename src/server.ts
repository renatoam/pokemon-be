import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

export { app }