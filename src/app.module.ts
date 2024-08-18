import { Module } from '@nestjs/common';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';

@Module({
  imports: [UserAuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
