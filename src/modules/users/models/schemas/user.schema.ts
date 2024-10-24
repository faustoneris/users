import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { LoginType } from "../enums/login-type.enum";

import { Document } from 'mongoose';

@Schema({ collection: 'Users' })
export class User extends Document {
    @Prop()
    name: string;
    @Prop()
    lastname: string;
    @Prop()
    fantasyName: string;
    @Prop()
    document: string;
    @Prop()
    phoneNumber: number;
    @Prop()
    password: string;
    @Prop()
    loginType: LoginType;
    @Prop()
    email: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
