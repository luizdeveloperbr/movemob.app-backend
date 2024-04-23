import { Module} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from 'src/entities/user/user.service'
import { UserModule } from 'src/entities/user/user.module'
import { JwtModule } from '@nestjs/jwt'
@Module({
    imports: [UserModule, JwtModule.register({
        secret: process.env.TOKEN_SECRET,
        global: true,
        signOptions: {
            expiresIn: '60m'
                    }
                })],
    providers: [
                AuthService,
                UserService,
               ],
    controllers: [AuthController]
})
export class AuthModule {}