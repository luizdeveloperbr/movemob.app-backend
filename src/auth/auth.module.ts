import { Module} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from 'src/entities/user/user.service'
import { UserModule } from 'src/entities/user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'
@Module({
    imports: [UserModule,
        PassportModule,
        JwtModule.register({
        secret: process.env.TOKEN_SECRET,
        global: true,
        signOptions: { expiresIn: '60m' }})],
        providers: [AuthService, UserService,LocalStrategy, JwtStrategy],
        controllers: [AuthController],
        exports: [AuthService]
})
export class AuthModule {}