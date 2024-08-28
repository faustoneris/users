import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserAuthenticationRepository } from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserAuthenticationRepository],
  exports: [UserService, UserAuthenticationRepository]
})
export class UserModule {}
