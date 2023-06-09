import { Router, Request, Response } from 'express';
import { TaskController } from './tasks.controller';
import { createValidator } from './tasks.validator';

const tasksRouter: Router = Router();

tasksRouter.get('/', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const allTasks = await taskController.getAll();
  res.status(200).json(allTasks);
});

tasksRouter.post('/task', createValidator, async (req: Request, res: Response) => {});

export default tasksRouter;
