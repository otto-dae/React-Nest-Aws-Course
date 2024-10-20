import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { TOKEN_NAME } from './constants/jwt.constants';
import { Cookies } from './decorators/cookies.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createAuthDto: CreateUserDto){
   return this.authService.registerUser(createAuthDto);
  }

  @Post("login")
  async signUser(@Body() loginUserDto: LoginUserDto, @Res({passthrough: true}) response: Response, @Cookies() cookies:any){
    const token =   await this.authService.loginUser(loginUserDto);
    response.cookie(TOKEN_NAME, token, {
      httpOnly: false,
      secure: true,
      maxAge: 1000 * 60 * 50 * 24 * 7,
      sameSite: false
    });
  }
  @Patch("/:email")
  updateUser(@Param('email') userEmail: string,  @Body() updateUserdto: UpdateUserDto){
    return this.authService.updateUser(userEmail, updateUserdto);
  }

}
