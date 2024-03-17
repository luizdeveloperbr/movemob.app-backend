import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDTO: Record<string, any>){
        return this.authService.signIn(signInDTO.email, signInDTO.password)
    }
    @Post('new')
    signUp(@Body() createUsuario: any){
        return this.authService.signUp(createUsuario)
    }
}
