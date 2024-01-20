import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import {
  movimentacao as MovimentacaoModel,
  equipamento as EquipamentoModel,
} from '@prisma/client';

@Injectable()
export class MovimentacaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async listarMovimentacoes(): Promise<MovimentacaoModel[]> {
    return this.prismaService.movimentacao.findMany();
  }

}
