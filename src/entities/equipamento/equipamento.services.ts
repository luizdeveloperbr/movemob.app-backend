import { PrismaService } from '../../database/prisma/prisma.service';
import { Equipamento as EquipamentoModel } from '@prisma/client';
import { Injectable } from '@nestjs/common';
@Injectable()
export class EquipamentoService {

    constructor(private readonly prismaService: PrismaService) {}

    async listarEquipamentos() : Promise<EquipamentoModel[]> {
        return this.prismaService.equipamento.findMany();
      }

    async selecionarEquipamentoPeloId(id: number){

      return this.prismaService.equipamento.findUnique({
        where: {
          plaqueta: id
        },
        include: {
         Filial: true
        }
      })
    }

    async adicionarEquipamento(equipamentoRequestBody: EquipamentoModel): Promise<EquipamentoModel> {
      return this.prismaService.equipamento.create({
        data: equipamentoRequestBody
      })
    }
      
}