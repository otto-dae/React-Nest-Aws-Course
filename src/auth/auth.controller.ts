import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createAuthDto: CreateUserDto){
   return this.authService.registerUser(createAuthDto);
  }

  @Post("login")
  signUser(@Body() loginUserDto: LoginUserDto){
    return this.authService.loginUser(loginUserDto);
  }
  @Patch("/:email")
  updateUser(@Param('email') userEmail: string,  @Body() updateUserdto: UpdateUserDto){
    return this.authService.updateUser(userEmail, updateUserdto);
  }

}
