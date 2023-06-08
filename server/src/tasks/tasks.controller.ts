import { Task } from './tasks.entity';
import { AppDataSource } from '../../server';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];

    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      console.log(allTasks);
    } catch (err) {
      console.log(err);
    }
  }
}
