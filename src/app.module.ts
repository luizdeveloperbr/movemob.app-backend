import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { EquipamentoModule } from './equipamento/equipamento.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), EquipamentoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
