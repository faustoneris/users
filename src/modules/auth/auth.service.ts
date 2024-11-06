import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../users/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/models/user.dto';

import { compareSync } from 'bcrypt';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async login(user: any): Promise<{ access_token: string }> {
       const payload = {
            sub: user.id,
            email: user.email,
            loginType: user.loginType,
            document: user.document
         };

       return {
            access_token: this.jwtService.sign(payload)
       }
    }

    async validateUser(document: string, password: string) {
        let user: UserDto;
        try {
            user = await this.userService.findUserByDocument(document);
        } catch (error) {
            return null;
        }

        if (!user) {
            throw new NotFoundException('Você não possui um cadastro na plataforma.')
        };

        const isPasswordValid = password == user.password;
        if (!isPasswordValid) return null;

        return user;
    }
}
