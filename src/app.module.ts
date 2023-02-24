import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './database/prisma/prisma.service';
import { EquipamentoController } from './entities/equipamento/equipamento.controller';
import { EquipamentoService } from './entities/equipamento/equipamento.services';
import { MovimentacaoController } from './entities/movimentacao/movimentacao.controller';
import { MovimentacaoService } from './entities/movimentacao/movimentacao.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [EquipamentoController, MovimentacaoController],
  providers: [PrismaService, EquipamentoService, MovimentacaoService],
})
export class AppModule { }
