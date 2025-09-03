import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entity/User';

@Injectable()
export class AuthService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly userService: UsersService,
    private readonly jwtservice: JwtService,
  ) {
  }

  // login(user: { id: number; username: string; email: string  , roles: string[] }) {
  //   const payload = {
  //     sub: user.id,
  //     username: user.username,
  //     email: user.email,
  //     roles: user.roles,
  //   };
  //   const access_token = this.jwtservice.sign(payload);
  //   const refresh_token = this.jwtservice.sign(payload, {
  //     expiresIn: '7d',
  //   });
  //   void this.userService.saveRefreshToken(refresh_token, user.id);
  //   return {
  //     access_token,
  //     refresh_token,
  //   };
  // }
login(user: { id: number; username: string; email: string; roles: string[]; enabled: boolean }) {
  const payload = {
    sub: user.id,
    username: user.username,
    email: user.email,
     
    enabled: user.enabled,
    role: Array.isArray(user.roles) && user.roles.length > 0 ? user.roles[0] : '', // ✅ Chỉ lấy tên role đầu tiên
  };
  const access_token = this.jwtservice.sign(payload);
  const refresh_token = this.jwtservice.sign(payload, {
    expiresIn: '7d',
  });
  void this.userService.saveRefreshToken(refresh_token, user.id);
  return {
    access_token,
    refresh_token,
  };
}
  verityRefreshToken(refresh_token: string): Promise<User> {
    return this.jwtservice.decode(refresh_token);
  }
  
}
