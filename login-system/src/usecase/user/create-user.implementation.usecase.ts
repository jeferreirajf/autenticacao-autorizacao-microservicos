import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UserGateway } from 'src/domain/gateways/user.gateway';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
  CreateUserUsecase,
} from 'src/domain/usecase/user/create-user.usecase';

@Injectable()
export class CreateUserImplementationUsecase extends CreateUserUsecase {
  public constructor(private readonly userGateway: UserGateway) {
    super();
  }

  public async execute({
    email,
    password,
  }: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const user = User.create({ email, password });

    await this.userGateway.create(user);

    const output: CreateUserOutputDto = {
      id: user.getId(),
    };

    return output;
  }
}

export const CreateUserUsecaseProvider = {
  provide: CreateUserUsecase,
  useClass: CreateUserImplementationUsecase,
};
