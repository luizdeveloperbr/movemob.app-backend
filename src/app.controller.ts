import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Equipamento as EquipamentoModel } from '@prisma/client';
@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('equipamentos')
  async getEquipamentos(): Promise<EquipamentoModel[]> {
    return this.prismaService.equipamento.findMany();
  }
}
