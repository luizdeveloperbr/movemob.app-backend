import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import {usuario} from '@prisma/client'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/singup')
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