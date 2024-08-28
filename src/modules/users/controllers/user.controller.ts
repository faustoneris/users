import {
    Body,
    Controller,
    Get,
    Param,
    Post
  } from '@nestjs/common';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userAuthenticationService: UserService,
  ) {}

  @Get('document')
  async findUserByDocument(@Param('document') document: string): Promise<User> {
    return;
  }

  @Post('create')
  async createUser(@Body() user: User): Promise<User> {
    return await this.userAuthenticationService.createUser(user);
  }

  @Post('authentication')
  async userAuthentication(@Body() user: any): Promise<any> {
      return;
  }
}
