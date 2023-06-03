import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = process.env.PORT || 3200;

app.use("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

const start = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
