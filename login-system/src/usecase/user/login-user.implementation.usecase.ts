import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { UserGateway } from 'src/domain/gateways/user.gateway';
import {
  LoginUserInputDto,
  LoginUserOutputDto,
  LoginUserUsecase,
} from 'src/domain/usecase/user/login-user.usecase';

@Injectable()
export class LoginUserImplementationUsecase extends LoginUserUsecase {
  public constructor(
    private readonly userGateway: UserGateway,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  public async execute({
    email,
    password,
  }: LoginUserInputDto): Promise<LoginUserOutputDto> {
    const user = await this.userGateway.findByEmail(email);

    if (!user) {
      return null;
    }

    if (user.verifyPassword(password)) {
      const payload = { userId: user.getId() };

      const jwtOptions: JwtSignOptions = {
        secret: process.env.JWT_SECRET,
      };

      const token = await this.jwtService.signAsync(payload, jwtOptions);

      const output: LoginUserOutputDto = {
        token,
      };

      return output;
    }

    return null;
  }
}

export const LoginUserUsecaseProvider = {
  provide: LoginUserUsecase,
  useClass: LoginUserImplementationUsecase,
};
