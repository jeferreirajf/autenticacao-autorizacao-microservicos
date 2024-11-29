import { Body, Controller, Post } from '@nestjs/common';
import {
  LoginUserInputDto,
  LoginUserUsecase,
} from 'src/domain/usecase/user/login-user.usecase';
import {
  LoginUserRequestDto,
  LoginUserResponseDto,
} from './dto/login-user.dto';

@Controller('/users')
export class LoginUserController {
  public constructor(private readonly loginUsecase: LoginUserUsecase) {}

  @Post('/login')
  public async login(@Body() loginRequest: LoginUserRequestDto) {
    const input: LoginUserInputDto = {
      email: loginRequest.email,
      password: loginRequest.password,
    };

    const result = await this.loginUsecase.execute(input);

    if (!result) {
      return {
        message: 'Invalid credentials',
      };
    }

    const output: LoginUserResponseDto = {
      token: result.token,
    };

    return output;
  }
}
