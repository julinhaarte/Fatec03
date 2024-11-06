import express from 'express';
import {getUser} from '../src/controllers/user.controller';
import cors from 'cors'

const app = express();

app.use(cors({
  origin: 'http://localhost:80',
}));
 
app.use("/", getUser);
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });