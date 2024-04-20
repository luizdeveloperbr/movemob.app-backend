import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

type UserCredentials = {
    email: string,
    password: string
}
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/login')
    @HttpCode(200)
    async callLoginFunction(@Body() userCredentials: UserCredentials) {
       let userInfo = await this.authService.login(userCredentials.email, userCredentials.password)
        console.log('auth controller', userInfo)
    }
}