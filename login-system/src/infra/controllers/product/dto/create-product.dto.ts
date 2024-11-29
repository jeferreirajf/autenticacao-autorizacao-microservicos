export class CreateProductRequestDto {
  token: string;
  name: string;
  price: number;
}

export class CreateProductResponseDto {
  id: number;
}
