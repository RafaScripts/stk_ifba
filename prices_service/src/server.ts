import express from 'express';
import cors from 'cors';
import prisma from "./database";
import {FindPrices, listPrices} from "./controller";
import * as fs from "node:fs";
import * as path from "node:path";

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

async function getPrices() {
    //leia um arquivo .txt de nome jafoi, localizado na raiz, caso ja exista, não execute a function FindPrices, caso não exista execute a function FindPrices FindPrices
    const filePath = path.join(__dirname, 'jafoi.txt');
    if (fs.existsSync(filePath)) {
        console.log('Arquivo jafoi.txt encontrado');
        return;
    } else {
        console.log('Arquivo jafoi.txt não encontrado, executando FindPrices');
        await FindPrices();
        fs.writeFileSync(filePath, 'jafoi.txt');
    }
}


app.listen(
  PORT,
  () => {
      console.log(`Server is running on port ${PORT}`)
      getPrices()
  },
)
