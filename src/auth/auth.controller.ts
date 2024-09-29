import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createAuthDto: CreateUserDto){
   return this.authService.registerUser(createAuthDto)
  }

  @Post("login")
  signUser(@Body() createUserDto: CreateUserDto){
    return this.authService.signUser(createUserDto)
  }

}
