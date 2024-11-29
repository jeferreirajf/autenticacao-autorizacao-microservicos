import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/create-product.dto';
import { ValidateCredentialsUsecase } from 'src/domain/usecase/user/validate-credentials.usecase';

@Controller('/products')
export class CreateProductController {
  constructor(
    private readonly validateCredentials: ValidateCredentialsUsecase,
  ) {}

  @Post()
  async create(@Body() createProductRequest: CreateProductRequestDto) {
    const credentials = await this.validateCredentials.execute({
      token: createProductRequest.token,
    });

    if (!credentials) {
      return {
        message: 'Not authorized',
      };
    }

    console.log(createProductRequest);

    return createProductRequest;
  }
}
