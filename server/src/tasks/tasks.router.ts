import { Router, Request, Response } from 'express';

const tasksRouter: Router = Router();

tasksRouter.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript');
});

export default tasksRouter;
