import express from 'express';
import cors from 'cors';
import prisma from "./database";
import {SingIn} from "./controller";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(
  {
    origin: '*'
  }
));

app.use(express.json());

app.get('/', async (req, res) => {
  const data = await prisma.user.findMany();

  return res.json(data);
});

app.post('/api/v1/signin', SingIn);

app.listen(
  PORT,
  () => console.log(`Server is running on port ${PORT}`),
)
