import { CanActivate,  ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWT_KEY, TOKEN_NAME } from '../constants/jwt.constants';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private jwtService: JwtService){}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    let token = this.ExtractTokenFromHeader(request)

    if(!token){
      token = request.cookies?.[TOKEN_NAME];
      if(!token) throw new UnauthorizedException("You are not authorized");
    }
    try{
      const payload = await this.jwtService.verifyAsync(token, 
      {
        secret: JWT_KEY
      });
      request['user'] = payload;
    }
    catch{
      throw new UnauthorizedException("You are not authorized");
    }

    return true;
  }

  private ExtractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}