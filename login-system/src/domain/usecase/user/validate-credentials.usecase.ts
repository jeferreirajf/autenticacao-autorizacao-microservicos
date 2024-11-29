import { Usecase } from '../usecase';

export type ValidateCredentialsInputDto = {
  token: string;
};

export type ValidateCredentialsOutputDto = {
  userId: string;
};

export abstract class ValidateCredentialsUsecase
  implements Usecase<ValidateCredentialsInputDto, ValidateCredentialsOutputDto>
{
  public abstract execute(
    input: ValidateCredentialsInputDto,
  ): Promise<ValidateCredentialsOutputDto>;
}
