import { Module } from '@nestjs/common';

import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://jett:jett@cluster0.bsa34th.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: 'Jett' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
