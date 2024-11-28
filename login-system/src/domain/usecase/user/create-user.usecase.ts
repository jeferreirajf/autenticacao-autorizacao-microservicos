import { Usecase } from '../usecase';

export type CreateUserInputDto = {
  email: string;
  password: string;
};

export type CreateUserOutputDto = {
  id: string;
};

export abstract class CreateUserUsecase
  implements Usecase<CreateUserInputDto, CreateUserOutputDto>
{
  public abstract execute(
    input: CreateUserInputDto,
  ): Promise<CreateUserOutputDto>;
}
