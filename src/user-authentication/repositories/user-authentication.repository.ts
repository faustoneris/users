import { Injectable } from '@nestjs/common';
import { User } from '../models/user';

@Injectable()
export class UserAuthenticationRepository {
  constructor() {}

  async createUser(user: User): Promise<User> {
    return;
  }
}
