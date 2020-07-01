import { Router } from 'express';

const routes = new Router();

routes.get('/users', (req, res) => {
  res.json({ message: 'Hello Teste' });
});

export default routes;
