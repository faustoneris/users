import { Module } from '@nestjs/common';
import { UserAuthenticationController } from './controllers/user-authentication.controller';
import { UserAuthenticationService } from './services/user-authentication.service';
import { UserAuthenticationRepository } from './repositories/user-authentication.repository';

@Module({
  imports: [],
  controllers: [UserAuthenticationController],
  providers: [UserAuthenticationService, UserAuthenticationRepository],
})
export class UserAuthenticationModule {}
