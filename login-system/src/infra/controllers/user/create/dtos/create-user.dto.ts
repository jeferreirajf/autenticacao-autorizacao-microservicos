export class CreateUserRequestDto {
  public email: string;
  public password: string;
}

export class CreateUserResponseDto {
  public id: string;
}
