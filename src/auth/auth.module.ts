import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/entities/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
