import { WebPayPlusViewData } from '../contracts/WebPayPlusViewData.contract';

export class WebPayPlusData {
  readonly buyOrder: string;
  readonly sessionId: string;
  readonly amount: number;

  constructor(buyOrder: string, sessionId: string, amount: number) {
    this.buyOrder = buyOrder;
    this.sessionId = sessionId;
    this.amount = amount;
  }

  static create(data: WebPayPlusViewData) {
    return new WebPayPlusData(data.buyOrder, data.sessionId, data.amount);
  }
}
