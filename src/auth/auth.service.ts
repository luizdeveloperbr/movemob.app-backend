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
    async validateUser(email: string, password: string){
        let user = await this.userService.getUser(email)
            if(!user) return null
            if(await bcrypt.compare(password, user.password) === false)  return null
            delete user.password
            return user
    }

    async login(user: any){
                const payload = {sub: user.id, nome: user.nome}
                return { token: this.jwtService.sign(payload) }
    }

    async singup(userInformationsData: usuario){
            let hashedPassword = await bcrypt.hash(userInformationsData.password, 10)
            let userInformationsReady = Object.assign(userInformationsData,{password: hashedPassword}) 
            return this.userService.addUser(userInformationsReady)
    }
}