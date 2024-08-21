import { Body, Controller, Post } from '@nestjs/common';
import { User, userData } from '../models/user';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Controller('users/authentication')
export class UserAuthenticationController {
  constructor(
    private readonly userAuthenticationService: UserAuthenticationService,
  ) {}

  @Post('create')
  async createUser(@Body() userData: userData): Promise<User> {
    const user = new User()

    user.setName(userData.name)
    user.setLastname(userData.lastname)
    user.setEmail(userData.email)
    user.setPhoneNumber(userData.phoneNumber)

    return await this.userAuthenticationService.createUser(user);
  }
}
