import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginhDto } from './dto/do-login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() doLogin: DoLoginhDto) {
    return this.authService.create(doLogin);
  }
}
