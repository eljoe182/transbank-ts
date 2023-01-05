import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';
import CreateWebpayController from '@app/controllers/webpay/create.controller';
import CreateWebpayUseCase from '@feat/webpay/application/create.useCase';
import CommitWebpayUseCase from '@feat/webpay/application/commit.useCase';
import CommitWebpayController from '@app/controllers/webpay/commit.controller';

container.register('Webpay.UseCase.Create', CreateWebpayUseCase);
container.register('Webpay.Controller.Create', CreateWebpayController).addArgument(new Reference('Webpay.UseCase.Create'));

container.register('Webpay.UseCase.Commit', CommitWebpayUseCase);
container
  .register('Webpay.Controller.Commit', CommitWebpayController)
  .addArgument(new Reference('Webpay.UseCase.Commit'));

export default container;
