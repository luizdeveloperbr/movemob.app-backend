import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
//import { EquipamentoController } from './entities/equipamento/equipamento.controller';
//import { EquipamentoService } from './entities/equipamento/equipamento.services';
//import { MovimentacaoController } from './entities/movimentacao/movimentacao.controller';
//import { MovimentacaoService } from './entities/movimentacao/movimentacao.service';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), EquipamentoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
