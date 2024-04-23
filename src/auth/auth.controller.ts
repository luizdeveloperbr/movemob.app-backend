import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Redirect } from '@nestjs/common'
import { AuthService } from './auth.service'
import {usuario} from '@prisma/client'
import handlerException from './handlerException'

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
       if(userInfo?.token) return userInfo
       handlerException(userInfo)
    }
    @Post('/singup')
    // @HttpCode(201)
    @Redirect('/setores')
    async callSingUpFunction(@Body() userInformationBody: usuario){
        const createdUser = await this.authService.singup(userInformationBody)
        switch (createdUser) {
            case 'P2002':
                throw new HttpException('User Already Exists', HttpStatus.AMBIGUOUS);
            default:
                return createdUser
        }
        
    }
}