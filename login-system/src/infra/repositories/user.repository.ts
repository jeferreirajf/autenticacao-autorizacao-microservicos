import { UserGateway } from 'src/domain/gateways/user.gateway';
import { prisma } from './prisma/prisma';
import { User } from 'src/domain/entities/user';

export class UserRepository implements UserGateway {
  constructor() {}

  public async create(user: User): Promise<void> {
    const userModel = {
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
    };

    await prisma.user.create({ data: userModel });
  }

  public async findByEmail(email: string): Promise<User | null> {
    const userModel = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    // userModel === null || userModel === undefined
    if (!userModel) {
      return null;
    }

    const user = User.with({
      id: userModel.id,
      email: userModel.email,
      password: userModel.password,
    });

    return user;
  }
}
