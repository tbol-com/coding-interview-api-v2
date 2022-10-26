import bodyParser from 'body-parser';
import express from 'express';
import loggerMiddleware from './middleware/logger.middleware';
import { Controller } from './interfaces';
import errorMiddleware from './middleware/error.middleware';
import { connectDb } from './db/db.handler';
import { seedDb } from './db/db.seeder';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    (async () => {
      await this.connectToTheDatabase();
    })();

    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen('3000', () => {
      console.log('API running on http://localhost:3000/payments');
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(loggerMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private async connectToTheDatabase() {
    await connectDb();
    await seedDb();
  }
}

export default App;
