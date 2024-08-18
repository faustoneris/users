import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { UserAuthenticationRepository } from '../repositories/user-authentication.repository';

@Injectable()
export class UserAuthenticationService {
  constructor(
    private readonly userAuthenticationRepository: UserAuthenticationRepository,
  ) {}

  async createUser(user: User): Promise<User> {
    user.validate();
    return await this.userAuthenticationRepository.createUser(user);
  }
}
