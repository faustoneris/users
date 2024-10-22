import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/schemas/user.schema';

const MODELS = MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);

@Module({
  imports: [MODELS],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository]
})
export class UserModule {}
