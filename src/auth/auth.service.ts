import * as bcrypt from 'bcrypt'
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/entities/user/user.service";
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    async login(email: string, password: string){
        let user = await this.userService.getUser(email)
            if(!user) throw new HttpException('user not found (context auth.service)', HttpStatus.NOT_FOUND)
            if(await bcrypt.compare(password, user.password)) return user
                      throw new HttpException('wrong password', HttpStatus.UNAUTHORIZED)
    }
}