import config from '@app/config';
import { WebpayPlus } from 'transbank-sdk';
import { IBaseUseCase } from '@shared/domain/interface/IBaseUseCase';
import { CommitWebPayPlusContract } from '../domain/contracts/CommitWebPayPlus.contract';

export default class CommitWebpayUseCase implements IBaseUseCase {
  async execute(dataCommit: CommitWebPayPlusContract): Promise<unknown> {
    const { token } = dataCommit;

    const options = {
      commerceCode: config.TRANSBANK.WEBPAY.COMMERCE_CODE,
      apiKey: config.TRANSBANK.WEBPAY.API_KEY,
      environment: config.TRANSBANK.WEBPAY.ENVIRONMENT,
    };

    const response = new WebpayPlus.Transaction(options)
      .commit(token)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error.message;
      });

    return response;
  }
}
