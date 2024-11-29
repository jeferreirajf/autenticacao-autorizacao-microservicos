import { User } from '../entities/user';

export abstract class UserGateway {
  abstract create(user: User): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
}
