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
    @Post('/singup')
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