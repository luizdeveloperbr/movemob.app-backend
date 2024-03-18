import { Body, Controller, Get, Post, UseGuards, Request, } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthService } from 'src/auth/auth.service';
@Controller('users')
export class UsuarioController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signup')
  async addUser(@Body() CreateUsuario) {
    return this.authService.signUp(CreateUsuario)
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return {
      User: req.user,
      msg: 'OK'
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req) {
    return req.user
  }
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return {
      msg: "session finished"
    }
  }
}