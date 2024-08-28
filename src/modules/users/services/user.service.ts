import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { UserAuthenticationRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userAuthenticationRepository: UserAuthenticationRepository,
  ) {}

  async findUserByDocument(document: string): Promise<User> {
    return;
  }

  async createUser(user: User): Promise<User> {
    return await this.userAuthenticationRepository.createUser(user);
  }

  async userAuthentication(user: any): Promise<any> {
    return;
  }
}
