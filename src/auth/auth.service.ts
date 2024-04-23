import * as bcrypt from 'bcrypt'
import { Injectable } from "@nestjs/common";
import { UserService } from "src/entities/user/user.service";
import {usuario} from '@prisma/client'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}
    async login(email: string, password: string){
        let user = await this.userService.getUser(email)
            if(!user) return 404
            if(await bcrypt.compare(password, user.password) === false)  return 401
                delete user.password;
                const token = await this.jwtService.signAsync(user)
                return { ...user, token }
    }
    async singup(userInformationsData: usuario){
            let hashedPassword = await bcrypt.hash(userInformationsData.password, 10)
            let userInformationsReady = Object.assign(userInformationsData,{password: hashedPassword}) 
            return this.userService.addUser(userInformationsReady)
    }
}