import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../taskForm/enums/Status';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return 'Todo';
    case Status.completed:
      return 'Success';
    case Status.inProgress:
      return 'In Progress';
  }
};
