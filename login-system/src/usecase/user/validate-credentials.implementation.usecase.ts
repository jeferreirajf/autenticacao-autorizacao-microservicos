import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { UserGateway } from 'src/domain/gateways/user.gateway';
import {
  ValidateCredentialsInputDto,
  ValidateCredentialsOutputDto,
  ValidateCredentialsUsecase,
} from 'src/domain/usecase/user/validate-credentials.usecase';

@Injectable()
export class ValidateCredentialsImplementationUsecase extends ValidateCredentialsUsecase {
  public constructor(
    private readonly userGateway: UserGateway,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  public async execute({
    token,
  }: ValidateCredentialsInputDto): Promise<ValidateCredentialsOutputDto> {
    const jwtOptions: JwtSignOptions = {
      secret: process.env.JWT_SECRET,
    };

    let payload: any;

    try {
      payload = await this.jwtService.verifyAsync(token, jwtOptions);
    } catch (error) {
      return null;
    }

    const id: string = payload.userId;

    const user = await this.userGateway.findById(id);

    if (!user) {
      return null;
    }

    const output: ValidateCredentialsOutputDto = {
      userId: id,
    };

    return output;
  }
}

export const ValidateCredentialsUsecaseProvider = {
  provide: ValidateCredentialsUsecase,
  useClass: ValidateCredentialsImplementationUsecase,
};
