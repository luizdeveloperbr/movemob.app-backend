import { Module } from '@nestjs/common';
import { EquipamentoService } from './equipamento.service';
import { EquipamentoController } from './equipamento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EquipamentoController],
  providers: [EquipamentoService, PrismaService]
})
export class EquipamentoModule {}
