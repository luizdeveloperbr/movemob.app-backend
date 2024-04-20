import { Module} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from 'src/entities/user/user.service'
import { PrismaService } from 'src/database/prisma/prisma.service'
@Module({
    providers: [
                AuthService,
                UserService,
                PrismaService
               ],
    controllers: [AuthController]
})
export class AuthModule {}