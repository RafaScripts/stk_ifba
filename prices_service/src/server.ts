import express from 'express';
import cors from 'cors';
import prisma from "./database";
import {FindPrices, listPrices} from "./controller";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(
  {
    origin: '*'
  }
));

app.use(express.json());

app.get('/api/v1/prices', listPrices);

//FindPrices();

app.listen(
  PORT,
  () => console.log(`Server is running on port ${PORT}`),
)
