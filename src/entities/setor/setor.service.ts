import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class SetorService {
  constructor(private readonly prismaService: PrismaService) {}

  async listarSetores(): Promise<any> {
    return this.prismaService.setor.findMany({include:{usuario: true}});
  }

  async listarSetorPorFilial(id: number) {
     return this.prismaService.setor.findMany({
        where:{
            filial_id: id
        }
    })
    }
}