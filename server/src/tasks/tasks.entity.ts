import { Entity, PrimaryGeneratedColumn } from 'typeorm'; // decorators
// import { Priority } from '../enums/Priority';
// import { Status } from '../enums/Status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
