/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Task } from './tasks.entity';
import { AppDataSource } from '../../server';
import { instanceToPlain } from 'class-transformer';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}
  // @ts-ignore
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];

    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      // Convert the tasks instance to an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];

      return allTasks;
    } catch (err) {
      console.log(err);
    }
  }
}
