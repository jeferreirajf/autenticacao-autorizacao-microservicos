export type CreateDto = {
  email: string;
  password: string;
};

export type WithDto = {
  id: string;
  email: string;
  password: string;
};

export class User {
  private id: string;
  private email: string;
  private password: string;

  private constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  public static create({ email, password }: CreateDto): User {
    const id = crypto.randomUUID();

    return new User(id, email, password);
  }

  public static with({ id, email, password }: WithDto): User {
    return new User(id, email, password);
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
