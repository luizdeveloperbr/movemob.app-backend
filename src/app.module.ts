import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EquipamentoModule } from './entities/equipamento/equipamento.module';
import { MovimentacaoModule } from './entities/movimentacao/movimentacao.module';
import { FilialModule } from './entities/filial/filial.module';
import { SetorModule } from './entities/setor/setor.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './entities/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
            ConfigModule.forRoot(),
            EquipamentoModule,
            MovimentacaoModule,
            FilialModule,
            SetorModule,
            AuthModule,
            UserModule
           ],
  controllers: [AppController]
})
export class AppModule {}
