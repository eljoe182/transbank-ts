import { WebPayPlusData } from '@feat/webpay/domain/class/WebPayPlusData';
import { ICreateUseCase } from '@feat/webpay/domain/interface/ICreateUseCase';
import { IBaseController } from '@shared/domain/BaseController';
import { NextFunction, Request, Response } from 'express';

export default class CreateWebpayController implements IBaseController {
  constructor(private useCase: ICreateUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction) {
    const { amount, sessionId, buyOrder } = req.body;
    const data = WebPayPlusData.create({ amount, sessionId, buyOrder });
    const result = await this.useCase.execute(data);
    return res.status(200).json(result);
  }
}
