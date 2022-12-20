import { Router, Request, Response, NextFunction } from 'express';
import container from '@app/dependencyInjection/webpay';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const controller: IBaseController = container.get('Webpay.Controller.Create');
  router.post('/webpay/create', (req: Request, res: Response, next: NextFunction) => {
    return controller.run(req, res, next);
  });
};
