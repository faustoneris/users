import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: "tcc",
      privateKey: '0Q60642EmnsDPibgZ1o5YH9gg0hWMowQAKQJ10UMXuU=',
      signOptions: { expiresIn: '10s' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService, LocalStrategy]
})
export class AuthModule {}
