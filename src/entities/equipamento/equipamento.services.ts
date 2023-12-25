import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { equipamento as EquipamentoModel } from '@prisma/client';
@Injectable()
export class EquipamentoService { 
  constructor(private readonly prismaService: PrismaService) {}

  async listarEquipamentos(): Promise<EquipamentoModel[]> {
    return this.prismaService.equipamento.findMany({
      include: { setor: { select: { descricao: true } } },
    });
  }

  async selecionarEquipamentoPeloId(id: number): Promise<EquipamentoModel> {
    return this.prismaService.equipamento.findFirst({
      where: { id },
      include:{
        setor: true,
        movimentacao:{
          select:{
            status: true
          }
        },
        filial: {
          select:{
            descricao: true
          }
        }
      }
    });
  }

  async adicionarEquipamento(
    equipamentoRequestBody: EquipamentoModel,
  ): Promise<EquipamentoModel> {
    return this.prismaService.equipamento.create({
      data: equipamentoRequestBody,
    });
  }
  async transferirEquipamento(
    id,
    tipo,
    destinatario,
  ): Promise<EquipamentoModel> {
    return;
  }
}
