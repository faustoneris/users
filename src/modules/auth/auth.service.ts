import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../users/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/models/user';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async login(document: string, password: string): Promise<{ access_token: string }> {
        const user = await this.userService.findUserByDocument(document);
        if (user?.getPassword() !== password) {
            throw new UnauthorizedException();
        }

        const userEncrypt = User.of(user.getDocument(), user.getName());
        return {
            access_token: await this.jwtService.signAsync(userEncrypt),
        };
    }
}
