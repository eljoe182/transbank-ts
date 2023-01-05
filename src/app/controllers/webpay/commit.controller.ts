import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/interface/IBaseUseCase';
import { Request, Response, NextFunction } from 'express';

export default class CommitWebpayController implements IBaseController {
  constructor(private commitUseCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<unknown> {
    const { token, transbankToken } = req.body;

    if (!token && !transbankToken) {
      return res.status(400).json({ message: 'El pago fue anulado por tiempo de espera.' });
    }

    if (!token && transbankToken) {
      return res.status(400).json({ message: 'El pago fue anulado por el usuario.' });
    }

    if (token && transbankToken) {
      return res.status(400).json({ message: 'El pago es inválido.' });
    }

    const result = await this.commitUseCase.execute({ token });

    return res.status(200).json(result);
  }
}
