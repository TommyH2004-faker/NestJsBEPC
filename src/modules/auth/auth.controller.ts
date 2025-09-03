import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Request, Response } from 'express';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly authService: AuthService,
    private userservice: UsersService,
  ) {}

  @Post('register')
  register(@Body() userData: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.userservice.create(userData);
  }

  // @Post('/login')
  // async login(@Body() dataLogin: { email: string; password: string }) {
  //   const { email, password } = dataLogin;
  //
  //   const user = await this.userservice.validateUser(email, password);
  //   if (!user) {
  //     throw new HttpException(
  //       'Email hoặc mật khẩu không đúng',
  //       HttpStatus.UNAUTHORIZED,
  //     );
  //   }
  //   return {
  //     message: 'Đăng nhập thành công',
  //     user,
  //   };
  // }

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@Req() req: Request) {
  //   // return req.user;
  //   return this.authService.login(
  //     req.user as unknown as { username: string; id: number; email: string; roles: string[] },
  //   );
  // }
@Post('login')
@UseGuards(LocalAuthGuard)
login(@Req() req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = req.user as any;
  return this.authService.login({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    id: user.id,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    username: user.username,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    email: user.email,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    enabled: user.enabled,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    roles: Array.isArray(user.roles) ? [user.roles[0]] : [user.roles],
  });
}

  @Post('/refresh-token')
  async refreshToken(@Body() { refresh_token }: { refresh_token: string }) {
    if (!refresh_token) {
      throw new BadRequestException('Refresh token is required');
    }
    const user = await this.authService.verityRefreshToken(refresh_token);
    if (!user) {
      throw new BadRequestException('Invalid refresh token');
    }
    return this.authService.login({
  id: user.id,
  username: user.name,
  email: user.email,
  enabled: user.enabled,
  roles: user.roles ? user.roles.map(role => role.name) : [], // ✅ Chuyển đổi roles sang mảng tên role
});
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
  // profile(@Req() req: Request) {
  //   return {
  //     user: req.user?.id,
  //     username: req.user?.username,
  //     email: req.user?.email,
  //     roles: req.user?.roles,
  //     message: 'Profile retrieved successfully',
  //   };
  //   // return req.user;
  // }

  // // Trong AuthController

  @UseGuards(JwtAuthGuard)
@Get('/profile')
getProfile(@Req() req: Request) {
  return {
    id: req.user?.id,
    username: req.user?.username,
    email: req.user?.email,
    role: Array.isArray(req.user?.roles) ? req.user?.roles[0] : req.user?.roles, // ✅ Trả về tên role duy nhất
  };
}
// @UseGuards(JwtAuthGuard)
// @Get('/profile')
// getProfile(@Req() req: Request) {
//   return {
//     id: req.user?.id,
//     username: req.user?.username,
//     email: req.user?.email,
//     roles: req.user?.roles,
//     message: 'Profile retrieved successfully', // ✅ Trả về mảng roles
//   };
// }
  @Get('search/existsByEmail')
  async existsByEmails(@Query('email') email: string): Promise<string> {
     
    const exists = await this.userservice.existsByEmail(email);
    return exists ? 'true' : 'false';
  }

  // Endpoint kiểm tra username đã tồn tại chưa
@Get('search/existsByUsername')
async existsByUsername(@Query('name') name: string): Promise<string> {
  const exists = await this.userservice.existsByName(name);
  return exists ? 'true' : 'false';
}



//  @Get('/activate/:code')
//   async activate(@Param('code') code: string, @Res() res: Response) {
     
//     const user = await this.userservice.activateAccount(code);

//     if (!user) {
       
//       return res.status(400).send('❌ Mã kích hoạt không hợp lệ hoặc đã hết hạn.');
//     }

     
//     return res.send('✅ Kích hoạt tài khoản thành công! Giờ bạn có thể đăng nhập.');
//   }
@Get('/activate/:code')
async activate(@Param('code') code: string, @Res() res: Response) {
  const user = await this.userservice.activateAccount(code);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: '❌ Mã kích hoạt không hợp lệ hoặc đã hết hạn.'
    });
  }

  return res.status(200).json({
    success: true,
    message: '✅ Kích hoạt tài khoản thành công! Giờ bạn có thể đăng nhập.'
  });
}

 @Put('forgot-password')
  async forgotPassword(@Body('email') email: string) {
     
    const ok = await this.userservice.forgotPassword(email);
    if (!ok) throw new NotFoundException('Email không tồn tại');
    return { success: true, message: 'Mật khẩu mới đã được gửi vào email của bạn' };
  }
}
