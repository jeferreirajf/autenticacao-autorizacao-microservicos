export class LoginUserRequestDto {
  public email: string;
  public password: string;
}

export class LoginUserResponseDto {
  public token: string;
}
