import express, { json } from 'express';
import prisma from './database.js';
import { random } from './math.js';

const app = express();
app.use(json());

app.get('/status', async (req, res) => {
  res.send('mudou aqui');

});

app.get('/random', async (req, res) => {
 
  const rand = random(1, 100)
  res.send(rand);
  
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();

  res.send(users);
  
});

app.post('/users', async (req, res) => {
  const body = req.body; // {name: "xablau"}

  await prisma.user.create({
    data: body
  });

  res.sendStatus(201); // created
});

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => console.log(`Magic happens on ${PORT}`))

export {
  app,
}