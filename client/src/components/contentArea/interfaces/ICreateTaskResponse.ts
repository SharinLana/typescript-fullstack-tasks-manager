import { Priority } from '../../taskForm/enums/Priority';
import { Status } from '../../taskForm/enums/Status';

export interface ICreateTaskResponse {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Priority}`;
  priority: `${Status}`;
}
