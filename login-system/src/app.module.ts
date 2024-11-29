import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserUsecaseProvider } from './usecase/user/create-user.implementation.usecase';
import { CreateUserController } from './infra/controllers/user/create/create-user.controller';
import { UserGatewayProvider } from './infra/repositories/user.repository';
import { LoginUserController } from './infra/controllers/user/login/login-user.controller';
import { LoginUserUsecaseProvider } from './usecase/user/login-user.implementation.usecase';
import { CreateProductController } from './infra/controllers/product/create-product.controller';
import { ValidateCredentialsUsecaseProvider } from './usecase/user/validate-credentials.implementation.usecase';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateUserController,
    LoginUserController,
    CreateProductController,
  ],
  providers: [
    AppService,
    JwtService,
    UserGatewayProvider,
    ValidateCredentialsUsecaseProvider,
    LoginUserUsecaseProvider,
    CreateUserUsecaseProvider,
  ],
})
export class AppModule {}
