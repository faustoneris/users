import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { User } from '../models/schemas/user.schema';
import { UserDto } from '../models/user.dto';
import { LoginType } from '../models/enums/login-type.enum';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByDocument(document: string): Promise<UserDto> {
    return await this.userModel.findOne({ document });
  }

  async findUserByEmail(email: string): Promise<UserDto> {
    return this.userModel.findOne({ email });
  }

  async findAllSuppliers(): Promise<UserDto[]> {
    return await this.userModel.find({ loginType: LoginType.SUPPLIER });
  }

  async createUser(user: UserDto): Promise<void> {
    await this.userModel.create(user);
  }

  async updateUser(id: string, user: User): Promise<boolean> {
    const updated = await this.userModel.updateOne(
      { _id: id },
      { $set: user }
    );
    return updated.matchedCount > 0;
  }

  async deleteUser(document: string): Promise<void> {
    await this.userModel.deleteOne({ document: document });
  }
}
