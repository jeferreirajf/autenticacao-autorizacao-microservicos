import { User } from '../entities/user';

export interface UserGateway {
  create(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
