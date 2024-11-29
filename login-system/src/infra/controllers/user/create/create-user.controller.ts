import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateUserInputDto,
  CreateUserUsecase,
} from 'src/domain/usecase/user/create-user.usecase';
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from './dtos/create-user.dto';

@Controller('users')
export class CreateUserController {
  public constructor(private readonly createUser: CreateUserUsecase) {}

  @Post()
  public async create(@Body() createUserRequest: CreateUserRequestDto) {
    const input: CreateUserInputDto = {
      email: createUserRequest.email,
      password: createUserRequest.password,
    };

    const result = await this.createUser.execute(input);

    const response: CreateUserResponseDto = {
      id: result.id,
    };

    return response;
  }
}
