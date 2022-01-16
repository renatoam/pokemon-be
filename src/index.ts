import 'dotenv/config';
import { app } from './server'

const port = 8080;

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
