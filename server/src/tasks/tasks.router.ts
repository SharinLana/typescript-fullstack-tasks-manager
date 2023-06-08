import { Router, Request, Response } from 'express';
import { TaskController } from './tasks.controller';

const tasksRouter: Router = Router();

tasksRouter.get('/', (req: Request, res: Response) => {
  const taskController = new TaskController();
  taskController.getAll();
});

export default tasksRouter;
