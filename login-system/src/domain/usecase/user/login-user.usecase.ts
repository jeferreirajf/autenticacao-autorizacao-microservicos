import { Usecase } from '../usecase';

export type LoginUserInputDto = {
  email: string;
  password: string;
};

export type LoginUserOutputDto = {
  token: string;
};

export abstract class LoginUserUsecase
  implements Usecase<LoginUserInputDto, LoginUserOutputDto>
{
  public abstract execute(
    input: LoginUserInputDto,
  ): Promise<LoginUserOutputDto>;
}
