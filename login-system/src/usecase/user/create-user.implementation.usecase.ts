import { User } from 'src/domain/entities/user';
import { UserGateway } from 'src/domain/gateways/user.gateway';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
  CreateUserUsecase,
} from 'src/domain/usecase/user/create-user.usecase';

export class CreateUserImplementationUsecase extends CreateUserUsecase {
  public constructor(private readonly userGateway: UserGateway) {
    super();
  }

  public async execute({
    email,
    password,
  }: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const user = User.create({ email, password });

    this.userGateway.create(user);

    const output: CreateUserOutputDto = {
      id: user.getId(),
    };

    return output;
  }
}
