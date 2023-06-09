/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from 'express';
import { Task } from './tasks.entity';
import { AppDataSource } from '../../server';
import { instanceToPlain } from 'class-transformer';

class TaskController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[];

    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });

      // Convert the tasks instance to an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];

      return res.status(200).json(allTasks);
    } catch (err) {
      return res.status(500).json({ err: 'internal server error' });
    }
  }
}

export const taskController = new TaskController();
