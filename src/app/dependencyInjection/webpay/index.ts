import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';
import CreateController from '@app/controllers/webpay/create.controller';
import CreateUseCase from '@feat/webpay/application/create.useCase';

container.register('Webpay.UseCase.Create', CreateUseCase);
container.register('Webpay.Controller.Create', CreateController).addArgument(new Reference('Webpay.UseCase.Create'));

export default container;
