import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma/prisma.service';
import { EquipamentoController } from './entities/equipamento/equipamento.controller';
import { EquipamentoService } from './entities/equipamento/equipamento.services';
import { MovimentacaoController } from './entities/movimentacao/movimentacao.controller';
import { MovimentacaoService } from './entities/movimentacao/movimentacao.service';
import { FilialController } from './entities/filial/filial.controller';
import { FilialService } from './entities/filial/filial.services';
import {SetoresController} from './entities/setor/setor.controller'
import {SetorService } from './entities/setor/setor.service'
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [
    EquipamentoController,
    MovimentacaoController,
    FilialController,
    SetoresController,
    AppController
  ],
  providers: [
    PrismaService,
    EquipamentoService,
    MovimentacaoService,
    FilialService,
    SetorService,
  ],
})
export class AppModule {}
