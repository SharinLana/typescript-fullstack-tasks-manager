import { Router, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { TaskController } from './tasks.controller';
import { createValidator } from './tasks.validator';

const tasksRouter: Router = Router();

tasksRouter.get('/', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const allTasks = await taskController.getAll();
  res.status(200).json(allTasks);
});

tasksRouter.post(
  '/task',
  createValidator,
  // @ts-ignore
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  },
);

export default tasksRouter;
