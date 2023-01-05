import config from '@app/config';
import { WebpayPlus } from 'transbank-sdk';
import { IBaseUseCase } from '@shared/domain/interface/IBaseUseCase';
import { WebPayPlusViewData } from '../domain/contracts/WebPayPlusViewData.contract';

export default class CreateWebpayUseCase implements IBaseUseCase {
  async execute(viewData: WebPayPlusViewData): Promise<unknown> {
    const { buyOrder, sessionId, amount } = viewData;

    const options = {
      commerceCode: config.TRANSBANK.WEBPAY.COMMERCE_CODE,
      apiKey: config.TRANSBANK.WEBPAY.API_KEY,
      environment: config.TRANSBANK.WEBPAY.ENVIRONMENT,
    };

    const returnUrl = config.TRANSBANK.WEBPAY.CALLBACK_URL;

    const createResponse = await new WebpayPlus.Transaction(options)
      .create(buyOrder, sessionId, amount, returnUrl)
      .catch((error) => {
        throw new Error(error);
      });
    const { url, token } = createResponse;
    return `${url}?token_ws=${token}`;
  }
}
