import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class SetorService {
  constructor(private readonly prismaService: PrismaService) { }

  async listarSetores(): Promise<any> {
    return this.prismaService.setor.findMany({ include: { responsavel: true } });
  }

  async listarSetorPorFilial({ id }: { id: number; }) {
    return this.prismaService.setor.findMany({
      where: {
        filial_id: id
      },
      include: {
          responsavel: {
            select: {
              nome: true
            }
          }
      }
    })
  }
}