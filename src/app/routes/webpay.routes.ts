import { Router, Request, Response, NextFunction } from 'express';
import container from '@app/dependencyInjection/webpay';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const controllerCreate: IBaseController = container.get('Webpay.Controller.Create');
  const controllerCommit: IBaseController = container.get('Webpay.Controller.Commit');
  router.post('/webpay/create', (req: Request, res: Response, next: NextFunction) => {
    return controllerCreate.run(req, res, next);
  });
  router.post('/webpay/commit', (req: Request, res: Response, next: NextFunction) => {
    return controllerCommit.run(req, res, next);
  });
};
