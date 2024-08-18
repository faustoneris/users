import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../models/user';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Controller('users/authentication')
export class UserAuthenticationController {
  constructor(
    private readonly userAuthenticationService: UserAuthenticationService,
  ) {}

  @Post('create')
  async createUser(@Body() user: User): Promise<User> {
    return await this.userAuthenticationService.createUser(user);
  }
}
