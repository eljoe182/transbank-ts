import { WebPayPlusViewData } from '@feat/webpay/domain/contracts/WebPayPlusViewData.contract';

export interface ICreateUseCase {
  execute(params: WebPayPlusViewData): Promise<unknown>;
}
