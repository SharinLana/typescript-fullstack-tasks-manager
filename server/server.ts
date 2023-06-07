import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import { DataSource } from 'typeorm';

const app: Express = express();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306, // default port
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true, // for development mode.
});

const port = process.env.PORT || 3200;

app.use('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('MySQL DB has been initialized');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
