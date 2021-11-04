import 'dotenv/config';

import routes from './routes';

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

// excluir depois
// DATABASE_URL="mongodb+srv://renato:RastaMongo122@cluster0.7azrh.mongodb.net/pokedex?retryWrites=true&w=majority"
