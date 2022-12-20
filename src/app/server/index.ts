import express from 'express';
import helmet from 'helmet';
import { ErrorHandler } from './errorHandler';
import ILogger from '@shared/domain/ILogger';
import container from '@app/dependencyInjection/shared';
import { registerRoutes } from '@app/routes';
import { RoutesErrorHandler } from './routesErrorHandler';

export class Server {
  private readonly port: number;
  public app = express();
  private logger: ILogger;

  constructor(port: number) {
    this.logger = container.get('Logger');
    const router = express.Router();
    this.port = port;
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(router, ErrorHandler);
    this.app.use(router, RoutesErrorHandler);
    registerRoutes(router);
  }

  start = async (): Promise<void> => {
    this.logger.info('Starting server...');
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        this.logger.info(`Server started on port ${this.port}`);
        resolve();
      });
    });
  };
}
