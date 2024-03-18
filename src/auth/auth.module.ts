import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/entities/usuario/usuario.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsuarioModule, PassportModule.register({session: true})],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
