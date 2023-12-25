import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma/prisma.service';
import { EquipamentoController } from './entities/equipamento/equipamento.controller';
import { EquipamentoService } from './entities/equipamento/equipamento.services';
import { MovimentacaoController } from './entities/movimentacao/movimentacao.controller';
import { MovimentacaoService } from './entities/movimentacao/movimentacao.service';
import { FilialController } from './entities/filial/filial.controller';
import { FilialService } from './entities/filial/filial.services';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [EquipamentoController, MovimentacaoController, FilialController],
  providers: [PrismaService, EquipamentoService, MovimentacaoService, FilialService],
})
export class AppModule {}
